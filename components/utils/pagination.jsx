import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const PaginationComp = ({ count, handleChange }) => {
  return (
    <div className="mb-4 flex justify-center items-center">
      <Stack spacing={2}>
        <Pagination
          count={count}
          variant="outlined"
          color="primary"
          shape="rounded"
          siblingCount={0}
          size="large"
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};

export default PaginationComp;
