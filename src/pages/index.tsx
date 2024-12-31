import Layout from "@/components/layout";
import { Box, Grid2, Typography } from "@mui/material";
import { useEffect, useState } from "react"

export default function Index() {
  const [username, setUserName] = useState<string>("");
  useEffect(() => {
    const user = localStorage.getItem("user") || "";
    if (user) {
      const userParsed = JSON.parse(user);
      setUserName(userParsed.username);
    }
  }, []);

  return (
    <Layout>
      <p>Hello {username}</p>
      <Box sx={{ mt: 3 }}>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Box sx={{ borderRadius: 2, background: "#0A1330", p: 3 }}>
              <Typography variant="body1">Asuransi Mikro Perumahan</Typography>
              <Typography variant="h3">100</Typography>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Box sx={{ borderRadius: 2, background: "#0A1330", p: 3 }}>
              <Typography variant="body1">Asuransi Mikro Bahari</Typography>
              <Typography variant="h3">120</Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Layout>
  )
} 