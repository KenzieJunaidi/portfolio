import './Rain.css';

export const Rain = () => {
    const drops = Array.from({ length: 100 });

    return (
        <div className="rain">
        {drops.map((_, i) => {
            const left = Math.random() * 100 + "vw";
            const duration = 0.5 + Math.random() * 0.7 + "s";
            const height = 15 + Math.random() * 15 + "px";
            const opacity = 0.2 + 0.2 * Math.random();

            return (
            <span
                key={i}
                style={{
                left,
                animationDuration: duration,
                height,
                background: `rgba(255, 255, 255, ${opacity})`
                }}
            />
            );
        })}
        </div>
    );
};