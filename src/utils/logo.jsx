export default function InitialsLogo({
  fullName = '',
  size = 56,
  rounded = 'circle',
  gradient = true,
  className = '',
  style = {},
}) {
  
const parts = fullName.trim().split(/\s+/).filter(Boolean);
const initials = parts.map(word => word[0]).join('').toUpperCase();

  const roundClass =
    rounded === 'circle' ? 'rounded-full' : rounded === 'rounded' ? 'rounded-2xl' : '';


  const inlineSize = {
    width: `${size}px`,
    height: `${size}px`,
    fontSize: Math.round(size * 0.42) + 'px',
    lineHeight: `${size}px`,
    ...style,
  };

  const bgClass = gradient
    ? 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'
    : 'bg-indigo-600';

  return (
    <div
      role="img"
      aria-label={`Profile initials for ${fullName || 'user'}`}
      className={`inline-flex items-center justify-center text-white font-semibold ${roundClass} ${className}`}
      style={inlineSize}
    >
      <div className={`w-full h-full flex items-center justify-center ${bgClass} ${roundClass}`}> 
        <span className="select-none">{initials || '--'}</span>
      </div>
    </div>
  );
}
