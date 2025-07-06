# 🛋️ VibeCraft

**VibeCraft** is a mobile AI-powered interior design assistant. It uses your smartphone camera and advanced spatial mapping to capture a room, lets you choose a design style, and then renders stunning styled room suggestions powered by our custom AI model.

![VibeCraft Logo](./assets/logo.png)

---

## 📱 Features

- 📷 Real-time room capture using camera & spatial mapping
- 🧠 AI-based interior design suggestions based on selected styles
- 🖼️ Rendered image outputs matching your room and preferences
- ☁️ Upload images to backend for model inference
- ⚡ Built with the latest technologies for performance and easy deployment

---

## 📚 Tech Stack

| Layer                | Tools / Libraries                      |
|---------------------|-----------------------------------------|
| **Mobile App**       | Expo SDK 53, React Native, expo-camera, expo-media-library |
| **Backend / AI**     | Custom AI Model API (image-to-style conversion), Image Upload Endpoint |
| **Build & Deploy**   | Expo CLI, EAS Build                    |

---

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Dipayansrkr/VibeCraft.git
cd VibeCraft
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the App

```bash
npx expo start
```

Open Expo Go on your device and scan the QR code.

---

## 🔗 API Integration

The app integrates with a hosted AI model endpoint. This API takes the room image and style input and returns a styled render.

**Example Request:**
```bash
POST /api/render
Content-Type: application/json

{
  "image": "<base64 string or image URL>",
  "style": "Modern"
}
```

**Example Response:**
```json
{
  "rendered_image_url": "https://example.com/rendered-modern-room.jpg"
}
```

---

## 🧠 AI Model

The backend model is a **custom-trained image generation model** optimized for interior design. It uses input like:

- Room angle & layout
- Selected theme/style
- Lighting condition (optional)

> We do not use RoomGPT or other third-party APIs. The model is privately hosted.

---

## 📦 Folder Structure

```bash
VibeCraft/
├── assets/                  # App assets like icons, images
├── components/              # Reusable React components
├── screens/                 # App screens
├── services/                # API and AI model connections
├── App.js                   # Entry point
├── app.json                 # Expo configuration
└── README.md                # Project documentation
```

---

## 🧪 Testing

- Manual testing via device (Expo Go)
- API testing via Postman
- Unit tests coming soon...

---

## 📲 Deployment

Use EAS for building production-ready APKs or publishing to app stores:

```bash
eas build --platform android
```

---

## 🧑‍💻 Contributors

- [Kaviya](https://github.com/Kavi2509) — Developer & Project Lead

---

## 📄 License

This project is licensed under the MIT License.

---

> 🚀 Have ideas or want to contribute? Fork the repo or open an issue!
