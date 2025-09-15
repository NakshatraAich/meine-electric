# Basisersquarrow Font Setup

## Font Installation

To use the Basisersquarrow font in this project, you need to add the font files to the `/public/fonts/` directory.

### Required Font Files

Add the following Basisersquarrow font files to `/public/fonts/`:

1. **Basisersquarrow-Regular.woff2** (or .woff)
2. **Basisersquarrow-Medium.woff2** (or .woff)
3. **Basisersquarrow-SemiBold.woff2** (or .woff)
4. **Basisersquarrow-Bold.woff2** (or .woff)

### Font Weights Mapping

- Regular: 400
- Medium: 500
- SemiBold: 600
- Bold: 700

### Where to Get the Font

If you don't have the Basisersquarrow font files:

1. Purchase/download from the official font foundry
2. Check if you have a license for web usage
3. Convert to WOFF2 format for optimal web performance

### Alternative Setup

If you cannot obtain the Basisersquarrow font, you can use a similar geometric sans-serif font as a fallback:

1. Update `/app/fonts.css` to use a different font
2. Update `tailwind.config.js` fontFamily settings
3. Consider using Google Fonts alternatives like:
   - Space Grotesk
   - DM Sans
   - Inter

### Current Implementation

The font is configured in:
- `/app/fonts.css` - @font-face declarations
- `/tailwind.config.js` - Font family configuration
- `/app/globals.css` - Global font application
- `/app/layout.tsx` - Body class application

The site will fallback to system fonts if Basisersquarrow is not available.