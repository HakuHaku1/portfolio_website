(function () {
    const ORDER = ['index.html', 'profile.html', 'portfolio.html', 'about.html'];
    const STORAGE_KEY = 'siteNavDirection';
    const EXIT_DELAY = 260;

    const store = {
        get() {
            try { return sessionStorage.getItem(STORAGE_KEY); } catch (error) { return null; }
        },
        set(value) {
            try { sessionStorage.setItem(STORAGE_KEY, value); } catch (error) {}
        },
        remove() {
            try { sessionStorage.removeItem(STORAGE_KEY); } catch (error) {}
        }
    };

    const currentFile = location.pathname.split('/').pop() || 'index.html';
    const enterDirection = store.get();

    if (enterDirection === 'left' || enterDirection === 'right') {
        const enterClass = `page-enter-${enterDirection}`;
        document.documentElement.classList.add(enterClass);
        store.remove();
        window.setTimeout(() => document.documentElement.classList.remove(enterClass), 650);
    }

    let navigating = false;

    document.addEventListener('click', function (event) {
        if (navigating || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
            return;
        }

        const anchor = event.target instanceof Element ? event.target.closest('a') : null;
        if (!anchor) return;

        const href = anchor.getAttribute('href');
        if (!href || href.startsWith('#') || anchor.hasAttribute('download') || (anchor.target && anchor.target !== '_self')) {
            return;
        }

        let url;
        try {
            url = new URL(href, location.href);
        } catch (error) {
            return;
        }

        if (url.origin !== location.origin) return;

        const targetFile = url.pathname.split('/').pop() || 'index.html';
        if (url.hash && targetFile === currentFile) return;

        const currentIndex = ORDER.indexOf(currentFile);
        const targetIndex = ORDER.indexOf(targetFile);
        if (currentIndex === -1 || targetIndex === -1 || currentIndex === targetIndex) return;

        event.preventDefault();
        navigating = true;

        const forward = targetIndex > currentIndex;
        document.body.classList.add(forward ? 'page-exit-left' : 'page-exit-right');
        store.set(forward ? 'right' : 'left');

        window.setTimeout(() => {
            window.location.href = url.href;
        }, EXIT_DELAY);
    });
})();
