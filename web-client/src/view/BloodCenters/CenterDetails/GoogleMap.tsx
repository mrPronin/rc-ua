import { useEffect, useRef } from 'react';

const addSingleMarkers = ({ locations, map }: {
    locations: ReadonlyArray<google.maps.LatLngLiteral>;
    map: google.maps.Map | null | undefined;
}) =>
    locations.map(
        position =>
            new google.maps.Marker({
                position,
                map,
            }),
    );

const GoogleMap = ({ center, zoom }: {
    center: google.maps.LatLngLiteral;
    zoom: number;
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            const map = new window.google.maps.Map(ref.current, {
                center,
                zoom,
            });
            addSingleMarkers({ locations: [center], map });
        }
    }, [ref, center, zoom]);

    return <div ref={ref} style={{ width: '100%', height: '400px' }} />
}

export default GoogleMap
