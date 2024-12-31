import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/router';
import { Box, Button } from '@mui/material';

export default function ProductList() {
  const router = useRouter();

  function goToForm() {
    router.push("/products/form?productId="+router.query.productId);
  }
  return (
    <Box sx={{ position: "relative", height: "84vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h6" noWrap component="div">
          {router.query.productName}
        </Typography>
        <Button variant="contained" endIcon={<AddIcon />} onClick={goToForm}>Tambah</Button>
      </Box>
      <TableContainer component={Paper} sx={{ background: "#0B1739" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nama Tertanggung</TableCell>
              <TableCell>Nomor KTP</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Nomor Telepon</TableCell>
              <TableCell>Jangka Waktu Awal</TableCell>
              <TableCell>Jangka Waktu Akhir</TableCell>
              <TableCell>Informasi Kepemilikan</TableCell>
              <TableCell>Alamat</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: "pointer", "&:hover": { backgroundColor: "#0A1330" } }}
            >
              <TableCell>Nama</TableCell>
              <TableCell>08001818818</TableCell>
              <TableCell>email@email.com</TableCell>
              <TableCell>08001818818</TableCell>
              <TableCell>01/01/2024</TableCell>
              <TableCell>01/01/2024</TableCell>
              <TableCell>Test</TableCell>
              <TableCell>Jl. jalan</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ position: "absolute", bottom: 0 }}>
        <Pagination count={10} color="primary" />
      </Box>
    </Box>
  )
}