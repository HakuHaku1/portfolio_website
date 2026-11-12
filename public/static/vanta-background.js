(function () {
    function initVanta() {
        const container = document.querySelector('.orb-container');
        if (!container || !window.VANTA || !window.THREE) return;

        window.VANTA.NET({
            el: '.orb-container',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200,
            minWidth: 200,
            scale: 1,
            scaleMobile: 1,
            color: 0x2563EB,
            backgroundColor: 0x020617,
            points: 8.0,
            maxDistance: 22.0,
            spacing: 18.0,
            showDots: false
        });

        container.classList.add('vanta-active');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initVanta);
    } else {
        initVanta();
    }
})();
