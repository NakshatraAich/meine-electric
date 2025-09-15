// IMAGES CONFIGURATION FILE - EASY TO EDIT!
// 
// HOW TO UPDATE IMAGES:
// 1. Find the section you want to update below
// 2. Replace the image path with your new image path
// 3. Save the file!
// 
// TIPS:
// - Upload your images to the /public/images/ folder
// - Use format: "/images/your-image-name.jpg"
// - Leave empty "" to use default placeholder
// - Recommended image sizes are noted for each section

export const siteImages = {
  // HERO SECTION BACKGROUND IMAGE
  // Recommended size: 1920x1080px or larger
  heroBackground: "https://images.pexels.com/photos/66869/green-leaf-natural-wallpaper-royalty-free-66869.jpeg", // Change this to your hero background image
  
  // COMPANY LOGO (shown in navbar)
  // Recommended size: 320x74px (or similar ratio)
  logo: "/logo.svg",
  
  // COMPANY INTRODUCTION SECTION
  // Recommended size: 800x800px (square)
  companyIntroImage: "https://images.pexels.com/photos/2233992/pexels-photo-2233992.jpeg",
  
  // FIRST TWO-COLUMN SECTION (Engineering the Future)
  // Recommended size: 1200x800px
  engineeringImage: "https://images.pexels.com/photos/2233992/pexels-photo-2233992.jpeg",
  
  // SECOND TWO-COLUMN SECTION (Seamless Energy Resilience)
  // Recommended size: 1200x800px
  resilienceImage: "https://images.pexels.com/photos/2233992/pexels-photo-2233992.jpeg",
  
  // DEFAULT PLACEHOLDERS (Don't change unless you know what you're doing)
  placeholders: {
    news: "ME", // Text shown when no news image
    general: "https://via.placeholder.com/600x400" // General placeholder image
  }
}

// HERO SECTION TEXT OVERLAY SETTINGS
// Adjust these if your hero image is too bright/dark
export const heroOverlaySettings = {
  // Options: "dark", "light", or "none"
  overlayType: "dark",
  // Opacity from 0 (transparent) to 100 (solid)
  overlayOpacity: 60
}
