# Miro AI Canvas Simple

A high-performance, interactive canvas interface inspired by Miro, built with React 19, Vite, and Tailwind CSS 4. This project implements a feature-rich canvas with pan/zoom controls, grid rendering, and a polished UI using the Miro Design System.

## Features

### Canvas Interactions
- **Pan & Zoom**: Smooth mouse wheel zoom with space+drag panning
- **Smart Grid Rendering**: Optimized dot grid that adapts to zoom levels
- **Keyboard Shortcuts**:
  - `Space` - Hold to enable panning mode
  - `R` - Reset zoom to 100%
- **High-DPI Support**: Crisp rendering on retina displays

### UI Components
- **BoardBar**: Top navigation bar with Miro branding and board information
- **CollaborationBar**: Real-time collaboration tools with user avatars
- **Toolbar**: Quick access to drawing and annotation tools
- **ZoomPanel**: Precise zoom controls with percentage display

### Design System
- Fully integrated Miro Design System tokens and icons
- Consistent spacing, colors, and typography
- Responsive component architecture

## Tech Stack

- **Build Tool**: Vite 5
- **Framework**: React 19 with latest features
- **Styling**: Tailwind CSS 4
- **Design System**: @mirohq/design-system with icons
- **Package Manager**: Bun
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+

### Installation

```bash
# Clone the repository
git clone git@github.com:mirowolff/miro-aicanvas-simple.git
cd miro-aicanvas-simple

# Install dependencies
bun install

# Start development server
bun dev
```

Open [http://localhost:5173](http://localhost:5173) to see the canvas in action.

## Project Structure

```
├── src/
│   ├── main.tsx           # Application entry point
│   ├── App.tsx            # Root component
│   ├── index.css          # Global styles
│   ├── components/
│   │   ├── layout/        # Layout components
│   │   │   ├── Canvas.tsx # Main canvas with rendering logic
│   │   │   ├── BoardBar.tsx
│   │   │   ├── CollaborationBar.tsx
│   │   │   ├── Toolbar.tsx
│   │   │   └── ZoomPanel.tsx
│   │   ├── ui/            # Reusable UI components
│   │   │   ├── Avatar.tsx
│   │   │   └── MeAvatarWithCounter.tsx
│   │   └── canvas/        # Canvas-specific components
│   │       ├── StickyNote.tsx
│   │       └── StickyColorPicker.tsx
│   └── styles/
│       └── miro-tokens.css # Miro Design System tokens
├── index.html             # HTML entry point
├── vite.config.ts         # Vite configuration
└── tailwind.config.js     # Tailwind CSS configuration
```

## Performance Optimizations

This project includes several optimizations for smooth canvas interactions:

1. **Batched Grid Rendering**: Grid dots are rendered in a single `fill()` call instead of individual operations
2. **Viewport Culling**: Only visible grid points are calculated and drawn
3. **Zoom Threshold**: Grid rendering is skipped when zoom level makes dots too small
4. **Canvas State Management**: Efficient state updates with `useCallback` to minimize re-renders

## Canvas Implementation Details

The canvas uses the HTML5 Canvas API with several optimizations:

- **Device Pixel Ratio**: Automatically adjusts for high-DPI displays
- **Transform Matrix**: Uses canvas transforms for smooth pan/zoom
- **Event Handling**: Native wheel events for better performance than React synthetic events
- **Memory Management**: Proper cleanup of event listeners and canvas contexts

## Customization

### Design Tokens

All design tokens are defined in `styles/miro-tokens.css` and follow the Miro Design System:

- Colors: `--colors-*`
- Typography: `--font-*`
- Spacing: Standard Miro spacing scale
- Shadows: `--shadows-*`

### Grid Configuration

Modify grid appearance in `components/layout/Canvas.tsx`:

```typescript
const GRID_SIZE = 20;        // Grid spacing in pixels
const MIN_ZOOM = 0.1;        // Minimum zoom level (10%)
const MAX_ZOOM = 5;          // Maximum zoom level (500%)
const ZOOM_STEP = 0.1;       // Zoom increment per scroll
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Acknowledgments

- Design system and icons from [Miro](https://miro.com)
- Built with [Vite](https://vitejs.dev) and [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
