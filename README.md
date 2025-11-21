# Portfolio Website

A modern, responsive portfolio website built with Angular 18 and Bootstrap 5, featuring smooth animations and a clean design.

## 🚀 Features

- **Modern Design**: Clean, professional layout with Bootstrap 5
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: AOS (Animate On Scroll) library for engaging animations
- **Single Page Application**: Fast navigation with Angular Router
- **Component-Based Architecture**: Modular and maintainable code structure
- **Resume Integration**: PDF resume display and download functionality

## 🛠️ Technologies Used

- **Angular 18**: Latest version of Angular framework
- **Bootstrap 5**: CSS framework for responsive design
- **TypeScript**: Type-safe JavaScript
- **AOS (Animate On Scroll)**: Library for scroll animations
- **Angular CLI**: Development tools and build system

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/           # Landing page component
│   │   ├── navbar/         # Navigation component
│   │   ├── projects/       # Projects showcase
│   │   ├── education/      # Education background
│   │   ├── certificates/   # Certificates and achievements
│   │   ├── skills/         # Technical skills
│   │   ├── resume/         # Resume display and download
│   │   ├── contact/        # Contact information
│   │   └── footer/         # Footer component
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   └── app.module.ts
├── assets/
│   └── resume/
│       └── priyanka__resume.pdf  # Resume PDF file
└── styles.css                    # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Priyanka959/Portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
# or
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## 📱 Sections

### 🏠 Home
- Hero section with introduction
- Professional summary
- Call-to-action buttons

### 💼 Projects
- Showcase of key projects
- Project descriptions and technologies used
- Links to live demos and source code

### 🎓 Education
- Educational background
- Degrees and certifications
- Academic achievements

### 🏆 Certificates
- Professional certifications
- Course completions
- Achievement badges

### 🛠️ Skills
- Technical skills overview
- Proficiency levels
- Technology stack

### 📄 Resume
- PDF resume preview
- Download functionality
- Professional experience summary

### 📞 Contact
- Contact information
- Social media links
- Contact form

## 🎨 Customization

### Personal Information
Update the component files in `src/app/components/` to customize:
- Personal details
- Project information
- Skills and experience
- Contact information

### Styling
- Global styles: `src/styles.css`
- Component-specific styles: Each component's `.component.css` file
- Bootstrap customization: Override variables in `src/styles.css`

### Resume PDF
Replace the resume file at `src/assets/resume/priyanka__resume.pdf` with your own resume.

## 📸 Screenshots

### Home Page
![Home Page](screenshots/home.png)
*Landing page with hero section and navigation*

### Projects Section
![Projects](screenshots/projects.png)
*Showcase of portfolio projects*

### Skills Section
![Skills](screenshots/skills.png)
*Technical skills and proficiency levels*

### Resume Section
![Resume](screenshots/resume.png)
*Resume preview and download functionality*

### Mobile View
![Mobile](screenshots/mobile.png)
*Responsive design on mobile devices*

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build and watch for changes
- `npm test` - Run unit tests

### Code Quality

- Follow Angular style guide
- Use TypeScript for type safety
- Maintain component modularity
- Ensure responsive design

## 🚀 Deployment

### GitHub Pages
```bash
ng build --configuration production --base-href "https://priyanka959.github.io/Portfolio/"
npx angular-cli-ghpages --dir=dist/portfolio
```

### Other Platforms
The built files in `dist/portfolio/` can be deployed to:
- Netlify
- Vercel
- Firebase Hosting
- AWS S3 + CloudFront
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Priyanka**
- GitHub: [@Priyanka959](https://github.com/Priyanka959)
- LinkedIn: [Your LinkedIn Profile]
- Email: [your.email@example.com]

## 🙏 Acknowledgments

- Angular Team for the amazing framework
- Bootstrap Team for the UI framework
- AOS library for smooth animations
- All contributors and supporters

---

⭐ **Star this repo** if you found it helpful!