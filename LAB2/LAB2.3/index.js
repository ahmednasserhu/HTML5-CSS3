class LocationHandler {
    constructor() {
      this.map = null;
      this.mapSuccess = false;
      this.lat = null;
      this.lon = null;
    }

    async initMap(x, y) {
      const { Map } = await google.maps.importLibrary("maps");

      this.map = new Map(document.getElementById("map"), {
        center: { lat: x, lng: y },
        zoom: 8,
      });
    }

    showMap() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.lat = position.coords.latitude;
          this.lon = position.coords.longitude;
          this.initMap(this.lat, this.lon);
          this.mapSuccess = true;
        },
        (error) => {
          console.error("Error getting location:", error);
          this.mapSuccess = false;
        }
      );
    }

    getLocationInfo() {
      if (this.mapSuccess) {
        document.getElementById("map-info").innerHTML = `
          <table>
            <tr>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Time</th>
            </tr>
            <tr>
              <td>${this.lat}</td>
              <td>${this.lon}</td>
              <td>${new Date()}</td>
            </tr>
          </table>`;
      } else {
        window.alert("Location permission was denied please allow the access to show the map.");
      }
    }

    requestLocationPermission() {
      const permissionGranted = window.confirm("Do you want to allow access to your location?");
      if (permissionGranted) {
        this.showMap();
      } else {
        alert("Location permission denied. Please enable location services.");
      }
    }
  }

  const locationHandler = new LocationHandler();

  document.getElementById("map-btn").addEventListener("click", () => {
    locationHandler.requestLocationPermission();
  });

  document.getElementById("info-btn").addEventListener("click", () => {
    locationHandler.getLocationInfo();
  });