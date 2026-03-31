# Chotu's Cafe 🍔

A modern, responsive fast-food restaurant website built with React and FastAPI.

## 🌟 Features

- **Modern UI/UX**: Beautiful dark-themed design with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **FastAPI Backend**: Robust Python backend with FastAPI framework
- **Interactive Menu**: Browse our delicious halal cuisine offerings
- **Contact Integration**: Easy contact form and location information
- **Gallery**: Showcase of our restaurant and food items

## 🛠️ Tech Stack

### Frontend
- **React** - Modern JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Router** - Declarative routing for React
- **Lucide React** - Beautiful & consistent icon toolkit

### Backend
- **FastAPI** - Modern, fast web framework for building APIs
- **Python** - Programming language
- **MongoDB** - NoSQL database (via Motor)
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hash-j/Fast-Food-Restaurant.git
   cd Fast-Food-Restaurant
   ```

2. **Backend Setup**
   ```bash
   cd backend
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate

   pip install -r requirements.txt
   uvicorn server:app --reload
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm start
   ```

4. **Open your browser**
   - Frontend: https://fast-food-restaurant-chi.vercel.app
   - Backend API: https://fast-food-restaurant-1-hcjt.onrender.com

## 📁 Project Structure

```
Fast-Food-Restaurant/
├── backend/                 # FastAPI backend
│   ├── server.py           # Main FastAPI application
│   ├── requirements.txt    # Python dependencies
│   └── .env               # Environment variables
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
│   ├── public/            # Static assets
│   └── package.json       # Node dependencies
├── tests/                  # Test files
├── memory/                 # Project documentation
└── README.md              # Project documentation
```

## 🌐 Live Demo

- **Frontend**: [Deployed on Vercel](https://fast-food-restaurant.vercel.app)
- **Backend**: [Deployed on Render](https://fast-food-restaurant-backend.onrender.com)

## 📞 Contact

**Chotu's Cafe**
- **Phone**: 0321-4967022
- **Location**: View on [Google Maps](https://maps.app.goo.gl/o13pHWE2XrSSzdZi8)
- **Hours**: Open Daily 12:00 PM - 2:00 AM

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons by [Lucide React](https://lucide.dev/)
- UI Components by [shadcn/ui](https://ui.shadcn.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)

---

**Made with ❤️ for Chotu's Cafe**
