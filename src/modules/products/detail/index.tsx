import { Box, Card, CardContent, Divider, Grid2, Typography } from "@mui/material";
import { useRouter } from "next/router";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function AsuransiMikroRumahkuDetail() {
  const router = useRouter();
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={() => router.back()}>
            <ChevronLeftIcon color="primary" />
          </IconButton>
          <Typography variant="h6">Detail</Typography>
        </Box>
      <Card sx={{ mt: 2, background: "#0B1739" }}>
        <CardContent>
          <Grid2 container>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography sx={{ mb: 1 }} variant="body1">Informasi Tertanggung</Typography>
              <table>
                <tr>
                  <td>
                    <Typography variant="body2">Nama Tertanggung</Typography>
                  </td>
                  <td>:</td>
                  <td>
                    <Typography variant="body2">Test</Typography>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography variant="body2">Nama Tertanggung</Typography>
                  </td>
                  <td>:</td>
                  <td>
                    <Typography variant="body2">Test</Typography>
                  </td>
                </tr>
              </table>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography sx={{ mb: 1 }} variant="body1">Informasi Tertanggung</Typography>
              <table>
                <tr>
                  <td>
                    <Typography variant="body2">Nama Tertanggung</Typography>
                  </td>
                  <td>:</td>
                  <td>
                    <Typography variant="body2">Test</Typography>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography variant="body2">Nama Tertanggung</Typography>
                  </td>
                  <td>:</td>
                  <td>
                    <Typography variant="body2">Test</Typography>
                  </td>
                </tr>
              </table>
            </Grid2>
          </Grid2>
          <Divider sx={{ my: 2 }} />
        </CardContent>
      </Card>
    </Box>
  )
}