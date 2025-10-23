import { IconMinus, IconPlus, IconListBullets, IconQuestionMarkCircle } from '@mirohq/design-system-icons';
import styles from './ZoomPanel.module.css';

interface ZoomPanelProps {
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onFitToScreen: () => void;
  onZoomToPercentage: (percentage: number) => void;
}

const ZOOM_PRESETS = [10, 25, 50, 75, 100, 125, 150, 200, 300, 400, 500];

export default function ZoomPanel({
  zoom,
  onZoomIn,
  onZoomOut,
  onFitToScreen,
  onZoomToPercentage
}: ZoomPanelProps) {
  const zoomPercentage = Math.round(zoom * 100);

  const handleZoomDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const percentage = parseInt(e.target.value);
    onZoomToPercentage(percentage / 100);
  };

  return (
      <div className={styles['zoom-panel-container']}>
        <div className={styles['zoom-panel']}>
          {/* List/Menu button */}
          <button
            onClick={onFitToScreen}
            className={`${styles['zoom-button']} ${styles['list-button']}`}
            title="Fit to screen"
          >
            <div className={styles['icon-container']}>
              <IconListBullets />
            </div>
          </button>

          {/* Zoom controls - minus and plus together */}
          <div className={styles['zoom-controls']}>
            {/* Zoom out button */}
            <button
              onClick={onZoomOut}
              disabled={zoom <= 0.1}
              className={styles['zoom-button']}
              title="Zoom out"
            >
              <div className={styles['icon-container']}>
                <IconMinus />
              </div>
            </button>

            {/* Zoom in button */}
            <button
              onClick={onZoomIn}
              disabled={zoom >= 5}
              className={styles['zoom-button']}
              title="Zoom in"
            >
              <div className={styles['icon-container']}>
                <IconPlus />
              </div>
            </button>
        </div>

          {/* Zoom percentage dropdown */}
          <div className={styles['zoom-dropdown-container']}>
            <select
              value={zoomPercentage}
              onChange={handleZoomDropdown}
              className={styles['zoom-dropdown']}
              title="Zoom level"
            >
            {ZOOM_PRESETS.map(preset => (
              <option key={preset} value={preset}>
                {preset}%
              </option>
            ))}
            {!ZOOM_PRESETS.includes(zoomPercentage) && (
              <option value={zoomPercentage}>
                {zoomPercentage}%
              </option>
            )}
          </select>
        </div>

          {/* Help button */}
          <button
            className={styles['zoom-button']}
            title="Help"
          >
            <div className={styles['icon-container']}>
              <IconQuestionMarkCircle />
            </div>
          </button>
        </div>
      </div>
  );
}