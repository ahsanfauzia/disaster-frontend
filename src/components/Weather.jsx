import { useEffect, useState } from "react";
import { MapPin, Thermometer, Wind } from "lucide-react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Fetching location...");

  const showNotification = (msg) => {
    if (Notification.permission === "granted") {
      new Notification(msg);
    }
  };

  const fetchWeather = async (lat, lon, cityName = "Your Location") => {
    try {
      // 🌦️ Weather API
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );
      const data = await res.json();

      if (data.current_weather) {
        setWeather(data.current_weather);
      }

      // 🏙️ City API (no CORS)
      const cityRes = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
      );
      const cityData = await cityRes.json();

      setCity(
        cityData.address?.city ||
          cityData.address?.town ||
          cityData.address?.village ||
          cityName
      );

      // 🔔 Alerts
      if (data.current_weather?.temperature > 40) {
        showNotification("⚠️ Heatwave Alert!");
      }

      if (data.current_weather?.windspeed > 50) {
        showNotification("⚠️ Storm Alert!");
      }
    } catch (err) {
      console.error(err);
      setCity("Error ❌");
    }
  };

  useEffect(() => {
    if (Notification.permission === "default") {
      Notification.requestPermission();
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          fetchWeather(pos.coords.latitude, pos.coords.longitude);
        },
        () => {
          fetchWeather(28.6, 77.2, "Delhi (default)");
        }
      );
    } else {
      fetchWeather(28.6, 77.2, "Delhi (default)");
    }
  }, []);

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>🌤️ Weather</h2>

      <div style={styles.location}>
        <MapPin size={18} />
        <span>{city}</span>
      </div>

      {weather ? (
        <div style={styles.info}>
          <div style={styles.item}>
            <Thermometer size={28} />
            <div>
              <p style={styles.label}>Temperature</p>
              <h3>{weather.temperature}°C</h3>
            </div>
          </div>

          <div style={styles.item}>
            <Wind size={28} />
            <div>
              <p style={styles.label}>Wind Speed</p>
              <h3>{weather.windspeed} km/h</h3>
            </div>
          </div>
        </div>
      ) : (
        <p style={{ marginTop: "10px" }}>Loading...</p>
      )}
    </div>
  );
}

const styles = {
  card: {
  width: "100%",
  maxWidth: "500px",   // 🔥 bada card
  margin: "40px auto",
  padding: "30px",
  borderRadius: "20px",
  background: "linear-gradient(135deg, #3b82f6, #1e3a8a)",
  color: "white",
  boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
  textAlign: "center",
},
  title: {
    marginBottom: "10px",
  },
  location: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    fontSize: "14px",
    opacity: 0.9,
  },
  info: {
    marginTop: "20px",
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    justifyContent: "center",
    marginBottom: "15px",
    background: "rgba(255,255,255,0.1)",
    padding: "10px",
    borderRadius: "12px",
  },
  label: {
    fontSize: "12px",
    opacity: 0.8,
  },
};

export default Weather;