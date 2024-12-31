/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, CircularProgress, FormControl, FormControlLabel, FormGroup, FormLabel, Grid2, IconButton, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, Typography } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { getForm } from "../../../api/forms";

export default function ProductForm() {
  const [forms, setForms] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  useEffect(() => {
    const user = localStorage.getItem("user") || "";
    if (user) {
      const token = JSON.parse(user).token;
      const productId = router.query.productId?.toString();
      getForm(token, productId).then((res) => {
        setForms(res.data.data);
        console.log(res.data);
      }).catch((err) => {
        console.log({err});
      }).finally(() => {
        setIsLoading(false);
      });
    }
  }, [router]);
  return (
    <Box sx={{ background: "#0B1739", p: 1, borderRadius: "10px" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton onClick={() => router.back()}>
          <ChevronLeftIcon color="primary" />
        </IconButton>
        <Typography variant="h6">Form {forms.product}</Typography>
      </Box>
      {isLoading && (
        <Box sx={{ my: 3, display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
      {!isLoading && (
        <Box sx={{ m: 3 }}>
          <Grid2 container spacing={2}>
          {Object.keys(forms).length > 0 && forms.forms.map((v: any) => (
            <Grid2 size={{ xs: 12, md: 6 }} key={v.section}>
              <Typography variant="body1" sx={{ mb: 2 }}>{v.section}</Typography>
              {v.forms.map((k: any) => (
                <Box sx={{ mb: 2 }} key={k.name}>              
                  {["number", "text", "textarea", "date", "email"].includes(k.type) && (
                    <Fragment>
                      <FormLabel sx={{ mb: 2 }}>{k.name}</FormLabel>
                      <OutlinedInput type={k.type} sx={{ mt: 1 }} fullWidth />
                    </Fragment>
                  )}
                  {k.type === "radio" && (
                    <FormControl>
                      <FormLabel>{k.name}</FormLabel>
                      <RadioGroup
                        name="radio-buttons-group"
                      >
                        {k.options.map((l: any) => <FormControlLabel key={l} value={l} control={<Radio />} label={l} />)}
                      </RadioGroup>
                    </FormControl>
                  )}
                  {k.type === "select" && (
                    <FormControl fullWidth>
                    <InputLabel id="select-label">{k.name}</InputLabel>
                    <Select
                      labelId="select-label"
                      id="simple-select"
                      label={k.name}
                    >
                      {k.options.map((l: any) => (
                        <MenuItem key={l} value={l}>{l}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  )}
                </Box>
              ))}
            </Grid2>
          ))}
          </Grid2>
          <Grid2 container>
            <Grid2 size={{ xs: 12, md: 6 }}>
              {Object.keys(forms).length > 0 &&  <Button fullWidth onClick={() => router.back()} sx={{ ml: "auto", mt: 3 }} variant="contained">Submit</Button>}
            </Grid2>
          </Grid2>
        </Box>
      )}
    </Box>
  )
}