---
    ---

    {% include js / conference.js %}

(() => {
    const map = window.conference.map;

    if (typeof map !== 'undefined') {
        let main_station = L.marker([46.9480, 7.4474], {
            icon: L.divIcon({
                className: '',
                html: '<span class="fas fa-train"></span> Uni Bern Main Building',
                iconSize: [120, 56]
            })
        }).addTo(map);
    }
})();
