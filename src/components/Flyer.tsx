import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";

export const Flyer = () => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle variant="h1" sx={{ mb: 0 }}>
        Wir haben noch Platz für 1 Kind
      </DialogTitle>
      <DialogContent>Text</DialogContent>
    </Dialog>
  );
};
