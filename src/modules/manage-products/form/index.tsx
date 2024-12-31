/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, Grid2, IconButton, InputLabel, MenuItem, OutlinedInput, Paper, Radio, RadioGroup, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useRouter } from "next/router";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";

const formList = [
  {
    group: "Informasi Tertanggung",
    name: "Nama Tertanggung",
    type: "text",
    mandatory: true,
    minLength: 5,
    maxLength: 100,
    options: ""
  },
  {
    group: "Informasi Tertanggung",
    name: "Nomor KTP",
    type: "number",
    mandatory: true,
    minLength: 16,
    maxLength: 16,
    options: ""
  },
  {
    group: "Informasi Tertanggung",
    name: "Email",
    type: "email",
    mandatory: false,
    minLength: 10,
    maxLength: 150,
    options: ""
  },
  {
    group: "Informasi Tertanggung",
    name: "Nomor Telepon",
    type: "text",
    mandatory: true,
    minLength: 10,
    maxLength: 16,
    options: ""
  },
]

export default function ManageProductForm() {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [openDialogDelete, setOpenDialogDelete] = useState<boolean>(false);
  return (
    <Box sx={{ background: "#0B1739", p: 1, borderRadius: "10px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <IconButton onClick={() => router.back()}>
            <ChevronLeftIcon color="primary" />
          </IconButton>
          <Typography variant="h6">Form Asuransi Mikro Bahari</Typography>
        </Box>
        <Button variant="contained" endIcon={<AddIcon />} onClick={() => {setOpenDialog(true)}}>Tambah Form</Button>
      </Box>
      <Box>
      <TableContainer component={Paper} sx={{ background: "#0B1739" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Group</TableCell>
              <TableCell>Nama</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Mandatory</TableCell>
              <TableCell>Min Length</TableCell>
              <TableCell>Max Length</TableCell>
              <TableCell>Options</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formList.map((v) => (
              <TableRow key={v.name}>
                <TableCell>{v.group}</TableCell>
                <TableCell>{v.name}</TableCell>
                <TableCell>{v.type}</TableCell>
                <TableCell>{v.mandatory.toString()}</TableCell>
                <TableCell>{v.minLength}</TableCell>
                <TableCell>{v.maxLength}</TableCell>
                <TableCell>-</TableCell>
                <TableCell>
                  <Button variant="contained" size="small" color="success" onClick={() => setOpenDialog(true)}>Edit</Button>
                  <Button variant="contained" size="small" color="error" onClick={() => setOpenDialogDelete(true)}>Hapus</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Dialog open={openDialog}>
        <DialogTitle>Tambah Form</DialogTitle>
        <DialogContent sx={{ width: "600px" }}>
          <Box sx={{ mb: 2 }}>
            <FormLabel sx={{ mb: 2 }}>Group</FormLabel>
            <OutlinedInput type="text" sx={{ mt: 1 }} fullWidth />
          </Box>
          <Box sx={{ mb: 3 }}>
            <FormLabel sx={{ mb: 2 }}>Name</FormLabel>
            <OutlinedInput type="text" sx={{ mt: 1 }} fullWidth />
          </Box>
          <Box sx={{ mb: 3 }}>
            <FormControl fullWidth>
              <InputLabel id="select-label">Type</InputLabel>
              <Select
                labelId="select-label"
                id="simple-select"
                label="Type"
              >
                <MenuItem value="Text">Text</MenuItem>
                <MenuItem value="Number">Number</MenuItem>
                <MenuItem value="Textarea">Textarea</MenuItem>
                <MenuItem value="Select">Select</MenuItem>
                <MenuItem value="Radio">Radio</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ mb: 3 }}>
            <FormControl>
              <FormLabel>Mandatory</FormLabel>
              <RadioGroup
                name="radio-buttons-group"
              >
                <FormControlLabel value="true" control={<Radio />} label="true" />
                <FormControlLabel value="false" control={<Radio />} label="false" />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Grid2 container spacing={2}>
              <Grid2 size={6}>
                <FormLabel sx={{ mb: 2 }}>Min Length</FormLabel>
                <OutlinedInput type="text" sx={{ mt: 1 }} fullWidth />
              </Grid2>
              <Grid2 size={6}>
                <FormLabel sx={{ mb: 2 }}>Max Length</FormLabel>
                <OutlinedInput type="text" sx={{ mt: 1 }} fullWidth />
              </Grid2>
            </Grid2>
          </Box>
          <Box sx={{ mb: 2 }}>
            <FormLabel sx={{ mb: 2 }}>Options</FormLabel>
            <OutlinedInput type="text" multiline sx={{ mt: 1, height: "80px" }} fullWidth />
          </Box>
        </DialogContent>
        <DialogActions>
        <Button onClick={() => {}}>Simpan</Button>
        <Button onClick={() => { setOpenDialog(false) }} color="error">Batalkan</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openDialogDelete}>
        <DialogTitle>Hapus Field?</DialogTitle>
        <DialogActions>
          <Button onClick={() => { setOpenDialogDelete(false) }}>Ok</Button>
          <Button onClick={() => { setOpenDialogDelete(false) }} color="error">Batalkan</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}