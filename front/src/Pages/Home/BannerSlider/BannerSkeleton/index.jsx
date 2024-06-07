import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";
// export const BannerSkeletonCard= () => {
//     return <Stack sx={{
//         width: '100%',
//         height: '500px',
//         position: 'relative',
//         borderRadius: '20px',
//         px: '50px',
//         '&> img': {
//             width: '100%',
//             height: '100%',
//             borderRadius: '20px'
//         },
//     }}>
//         <Box sx={{
//             width: '300px',
//             position: 'absolute',
//             left: '8%',
//             top: '25%',
//             transform: 'translateY(-25%)',
//             zIndex: 1000
//         }}>
//             <Skeleton width={'200px'} height={'150px'} animation={'wave'} variant={'rounded'} />
//         </Box>
//         <Skeleton width={'100%'} height={'100%'} animation={'wave'} variant={'rounded'} />

//     </Stack>
// }
export default function BannerSkeleton() {
  return (
    <Stack
      direction='row'
      sx={{
        transform: "translateY(-100px)",
        px: "70px",
      }}>
      <Skeleton width={"100%"} height={"700px"} animation={"wave"} />
    </Stack>
  );
}
