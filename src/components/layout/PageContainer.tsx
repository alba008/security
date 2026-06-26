import { Container } from "@mui/material";

export default function PageContainer({
children,
}: {
children: React.ReactNode;
}) {
return (
<Container
maxWidth="xl"
sx={{
px: {
xs: 2,
md: 4,
lg: 6,
},
}}
>
{children} </Container>
);
}
