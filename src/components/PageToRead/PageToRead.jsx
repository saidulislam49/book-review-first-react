import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";


const AnyReactComponent = ({ text }) => <div className="text-red-600"><FaMapMarkerAlt></FaMapMarkerAlt></div>;

const PageToRead = () => {

    const defaultProps = {
        center: {
            lat: 23.8041,
            lng: 90.4152,
        },
        zoom: 13,
    };

    return (
        <div>
            <div className="container xl:max-w-[1170px] py-12">
                <h1>Page To Read</h1>
                <div style={{ height: "80vh", width: "100vh" }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={defaultProps.center.lat}
                            lng={defaultProps.center.lng}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    );
};

export default PageToRead;
