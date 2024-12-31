/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
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
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormLabel, OutlinedInput } from '@mui/material';
import { getProduct } from '@/api/products';

export default function ManageProductList() {
  const router = useRouter();
  const [productList, setProductList] = React.useState<any[]>([]);
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const [openDialogDelete, setOpenDialogDelete] = React.useState<boolean>(false);

    React.useEffect(() => {
      const user = localStorage.getItem("user") || "";
      if (user) {
        const userParsed = JSON.parse(user);
        getProduct(userParsed.token)
        .then((res) => {
          setProductList(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
      }
    }, []);

  return (
    <Box sx={{ position: "relative", height: "84vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h6" noWrap component="div">
          Daftar Produk
        </Typography>
        <Button variant="contained" endIcon={<AddIcon />} onClick={() => setOpenDialog(true)}>Tambah Produk</Button>
      </Box>
      <TableContainer component={Paper} sx={{ background: "#0B1739" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Nama Produk</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.map((v) => (
              <TableRow
                key={v.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: "pointer", "&:hover": { backgroundColor: "#0A1330" } }}
              >
                <TableCell>{v.id}</TableCell>
                <TableCell>{v.name}</TableCell>
                <TableCell>
                  <Button size="small" variant="contained" onClick={() => setOpenDialogDelete(true)} color="error">hapus</Button>
                  <Button size="small" variant="contained" onClick={() => setOpenDialog(true)} color="success">edit</Button>
                  <Button size="small" variant="contained" onClick={() => router.push("/manage-products/form")}>edit form</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ position: "absolute", bottom: 0 }}>
        <Pagination count={10} color="primary" />
      </Box>
      <Dialog open={openDialog}>
        <DialogTitle>Tambah Produk</DialogTitle>
        <DialogContent sx={{ width: "600px" }}>
          <Box sx={{ mb: 2 }}>
            <FormLabel sx={{ mb: 2 }}>ID Produk</FormLabel>
            <OutlinedInput type="text" sx={{ mt: 1 }} fullWidth />
          </Box>
          <Box sx={{ mb: 3 }}>
            <FormLabel sx={{ mb: 2 }}>Nama Produk</FormLabel>
            <OutlinedInput type="text" sx={{ mt: 1 }} fullWidth />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { setOpenDialog(false) }}>Simpan</Button>
          <Button onClick={() => { setOpenDialog(false) }} color="error">Batalkan</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openDialogDelete}>
        <DialogTitle>Hapus Produk?</DialogTitle>
        <DialogActions>
          <Button onClick={() => { setOpenDialogDelete(false) }}>Ok</Button>
          <Button onClick={() => { setOpenDialogDelete(false) }} color="error">Batalkan</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}