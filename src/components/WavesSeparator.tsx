import React from 'react';

interface WavesSeparatorProps {
  position: 'top' | 'bottom';
  variant?: 'wave' | 'diagonal' | 'curved';
  color?: string;
}

const WavesSeparator: React.FC<WavesSeparatorProps> = ({
  position,
  variant = 'wave',
  color = 'white'
}) => {
  const getPath = () => {
    switch (variant) {
      case 'diagonal':
        return position === 'top'
          ? 'M0,96L1440,0L1440,0L0,0Z'
          : 'M0,0L1440,96L1440,96L0,96Z';
      case 'curved':
        return position === 'top'
          ? 'M0,96L720,32L1440,96L1440,0L0,0Z'
          : 'M0,0L720,64L1440,0L1440,96L0,96Z';
      case 'wave':
      default:
        return position === 'top'
          ? 'M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,122.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L0,0Z'
          : 'M0,32L48,53.3C96,75,192,117,288,122.7C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64L1440,96L0,96Z';
    }
  };

  return (
    <div className={`relative w-full overflow-hidden ${position === 'top' ? '-mt-1' : '-mb-1'}`}>
      <svg
        className="absolute w-full h-24"
        style={{
          [position]: '0',
          transform: position === 'top' ? 'rotate(180deg)' : 'none'
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
      >
        <path fill={color} d={getPath()} />
      </svg>
    </div>
  );
};

export default WavesSeparator;