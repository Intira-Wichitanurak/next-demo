import React, { CSSProperties } from "react";

export default function ProfilePage() {
  const styles: { [key: string]: CSSProperties } = {
    container: {
      display: "flex",
      minHeight: "100vh",
      alignItems: "center",
      justifyContent: "center",
      background: "#f5f5f5",
      padding: "2rem",
    },
    card: {
      background: "white",
      padding: "2rem",
      borderRadius: "16px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      maxWidth: "400px",
      textAlign: "center",
    },
    avatar: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      margin: "0 auto",
      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
    },
    name: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      marginTop: "1rem",
    },
    role: {
      fontSize: "1rem",
      color: "#666",
      marginBottom: "1rem",
    },
    info: {
      fontSize: "0.95rem",
      margin: "1rem 0",
      color: "#333",
    },
    links: {
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
      marginTop: "1rem",
    },
    link: {
      padding: "0.5rem 1rem",
      borderRadius: "8px",
      textDecoration: "none",
      background: "#0070f3",
      color: "white",
      fontWeight: "500",
      transition: "background 0.3s",
    },
  };

  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <img src="https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-6/503767020_1943797499490449_8305544543835157937_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=lDZ0Gt-i6HQQ7kNvwG9mbIv&_nc_oc=Adlu36jDJP5vhGFumtRK1iXlKoY14lXkgpFArNRV6N1Chb80ZduE2tXj4gXwCp5T5-MnrgSY1OSk5_qIupeMze2A&_nc_zt=23&_nc_ht=scontent.fbkk25-1.fna&_nc_gid=ucbHdQt8Ur2hbXoIQsky0g&oh=00_AfYM9T2lwP_r0ww9jMu8LiEyzEaovdwfuGmCn2QeIlNDSg&oe=68CAA8C0" alt="Profile Picture" style={styles.avatar} />
        <h1 style={styles.name}> 66113440 <br /> Intira Wichitanuruk</h1>
        <p style={styles.role}>Computer Engineering & AI Student</p>

        <div style={styles.info}>
          <p>📧 intira.wi@mail.wu.ac.th</p>
          <p>📱 092-869-3605</p>
        </div>

        <div style={styles.links}>
          <a href="https://github.com/" target="_blank" style={styles.link}>
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" style={styles.link}>
            LinkedIn
          </a>
        </div>
      </div>
      <div style={styles.card}>
        <img src="https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-1/509419488_1757765735137639_4264659514282887431_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=1d2534&_nc_ohc=Le59k7LpFqQQ7kNvwFDl2uT&_nc_oc=AdklD9U1r1GN-Zok80ZGWzBg2rlFIauy5YMsHNYRrIZxrBrhI18rNP1LNCzk9d_4bv_O1xGRnoJBgfH6rpbULy21&_nc_zt=24&_nc_ht=scontent.fbkk25-1.fna&_nc_gid=BTt5kcN3rEMmwG14MNlgFw&oh=00_AfZ4-93o0Y_CsVprklH8oKI6TdSm8Bdwk0XkrV9esdJn3Q&oe=68CAA675" alt="Profile Picture" style={styles.avatar} />
        <h1 style={styles.name}> 66108853 <br /> ภานรินทร์ เจ็งศิริ</h1>
        <p style={styles.role}>Computer Engineering & AI Student</p>

        <div style={styles.info}>
          <p>📧 parnarin.je@mail.wu.ac.th</p>
          <p>📱 085-215-3598</p>
        </div>

        <div style={styles.links}>
          <a href="https://github.com/" target="_blank" style={styles.link}>
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" style={styles.link}>
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
}
