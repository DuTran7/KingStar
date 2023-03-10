import ResponsiveAppBar from "@/app/shared/NavBar";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Carousel } from "antd";
import MediaCard from "@/app/shared/ProductCard";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { themeMUI } from "@/theme";
const contentStyle: React.CSSProperties = {
  margin: 0,
  color: "#fff",
  //   lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  backgroundImage: `url("hanghoa1.jpg")`,
  height: "calc(100vh - 84px)",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
export default function HomePage() {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const Imgs = ["/hanghoa1.jpg", "/hanghoa2.jpg"];
  const products = [
    {
      src: "/ot-bot.jpg",
      name: "Gia Vị Ớt",
      description:
        "Miền Trung là một trong những vùng sản xuất ớt lớn nhất Việt Nam. Gia vị ớt của Miền Trung được sản xuất từ ớt sấy khô, giúp tăng hương vị và màu sắc cho các món ăn. Sản phẩm này được xuất khẩu sang nhiều quốc gia, đặc biệt là các nước Châu Á.",
    },
    {
      src: "/banhtranme.jpg",
      name: "Bánh Trán Mè",
      description:
        "Đây là một loại bánh tráng được làm từ bột gạo, được phủ lớp mè rang giòn. Sản phẩm này là món ăn nhẹ phổ biến ở Miền Trung và được xuất khẩu sang nhiều quốc gia trên thế giới.",
    },
    {
      src: "/hat-dieu-rang-muoi.jpg",
      name: "Hạt Điều Rang Muối",
      description:
        "Đây là một trong những sản phẩm điểm nhấn của công ty chúng tôi, được sản xuất từ hạt điều tươi ngon, được chọn lọc kỹ càng và rang lên với muối hảo hạng, mang lại vị giòn, đậm đà và mặn nhẹ đặc trưng. Sản phẩm của chúng tôi được đóng gói với các kích cỡ khác nhau để đáp ứng nhu cầu của khách hàng.",
    },
  ];

  const values = [
    {
      src: "/thanh-tuu.png",
      value: "1.000+ tỷ",
      label: "Tổng tài sản",
    },
    {
      src: "/thanh-tuu.png",
      value: "1.00+ tỷ",
      label: "Doanh thu",
    },
    {
      src: "/cong-xuong.png",
      value: "50.000 m2",
      label: "Nhà xưởng",
    },
    {
      src: "/quoc-gia.png",
      value: "26",
      label: "Quốc gia",
    },
    {
      src: "/location.png",
      value: "HN và HCM",
      label: "Văn phòng",
    },
  ];
  return (
    <Box width={"100vw"} position={"relative"}>
      <Box position={"fixed"} width={"100%"} zIndex={999} top={0} left={0}>
        <ResponsiveAppBar />
      </Box>
      <Box position={"relative"}>
        <Carousel
          autoplay={true}
          autoplaySpeed={3000}
          fade={true}
          infinite={true}
          afterChange={onChange}
          style={{
            height: "calc(100vh - 84px)",
          }}
        >
          {Imgs.map((src, idx) => (
            <div key={idx}>
              <h3
                style={{
                  ...contentStyle,
                  backgroundImage: `url("${src}")`,
                }}
              ></h3>
            </div>
          ))}
        </Carousel>
        <Stack
          width={"70%"}
          height={"50%"}
          position={"absolute"}
          zIndex={1}
          left={"50%"}
          top={"50%"}
          sx={{
            transform: "translate(-50%, -50%)",
            background: "#0000007a",
            // backdropFilter: "blur(0.41px)",
          }}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
          rowGap={3}
        >
          <Typography
            variant='h1'
            fontSize={{
              xs: "2.4rem",
              md: "3.5rem",
            }}
            color={"white"}
          >
            CÔNG TY XUẤT NHẬP KHẨU <br />
            VIỆT NAM
          </Typography>
          <Typography
            variant='body1'
            fontSize={{
              xs: "1.4rem",
              md: "2.5rem",
            }}
            color={"white"}
          >
            Đối tác xuất nhập khẩu hàng đầu của bạn
          </Typography>
        </Stack>
      </Box>
      <div id='san-pham'></div>
      <Box position={"relative"} p={5} py={8} sx={{}}>
        <Stack justifyContent={"center"} alignItems={"center"} textAlign={"center"}>
          <Stack width={"100%"} alignItems={"center"}>
            <Typography variant='h2' fontSize={"1.7rem"} mb={1}>
              OUR PRODUCT
            </Typography>
            <Typography variant='h3' fontSize={"2.3rem"}>
              SẢN PHẨM CHỦ LỰC
            </Typography>

            <Stack
              width={"min(90vw, 1200px)"}
              flexWrap={"wrap"}
              direction={"row"}
              columnGap={3}
              rowGap={3}
              mt={8}
              justifyContent={"center"}
              alignItems={"center"}
              textAlign={"center"}
            >
              <Carousel
                autoplay={true}
                autoplaySpeed={3000}
                infinite={true}
                slidesToShow={3}
                // centerMode={true}
                // centerPadding={"40"}
                afterChange={onChange}
                style={{
                  height: "600px",
                  width: "min(90vw, 1200px)",
                  marginBottom: "20px",
                }}
                responsive={[
                  {
                    breakpoint: 370,
                    settings: {
                      slidesToShow: 1,
                    },
                  },
                  {
                    breakpoint: 940,
                    settings: {
                      slidesToShow: 1,
                    },
                  },
                  {
                    breakpoint: 1500,
                    settings: {
                      slidesToShow: 3,
                    },
                  },
                ]}
              >
                {products.map((item, key) => (
                  <Box key={key}>
                    <Stack justifyContent={"center"} alignItems={"center"} alignContent={"center"}>
                      <MediaCard data={item} />
                    </Stack>
                  </Box>
                ))}
              </Carousel>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <div id='gia-tri'></div>
      <Box
        position={"relative"}
        sx={{
          background: `url("/1445467.jpg") center 0.898px / cover no-repeat fixed`,
        }}
      >
        <Box
          width={"100%"}
          height={"100%"}
          position={"absolute"}
          top={0}
          left={0}
          sx={{
            background: "#000000b0",
          }}
        ></Box>
        <Stack
          zIndex={1}
          width={"100%"}
          height={"100%"}
          p={"200px 40px"}
          sx={{
            backdropFilter: "blur(2px)",
          }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant='h3' fontSize={"2.7rem"} mb={4} color={"white"} textAlign={"center"}>
            <i>Hướng tới chuỗi giá trị bền vững</i>
          </Typography>
          <Typography
            variant='body1'
            fontSize={"1.1rem"}
            color={"white"}
            textAlign={"center"}
            lineHeight={1.7}
            width={{
              xs: "80vw",
              md: "60vw",
            }}
          >
            Việt Nam có một cơ hội lớn để tận dụng thế mạnh nông nghiệp và liên kết sâu hơn vào chuỗi giá trị toàn cầu. Để hiện thực hóa
            tiềm năng này, KingStar đang tập trung đầu tư công nghệ từ sản xuất, chế biến, đóng gói và tiêu thụ bên cạnh việc phát triển
            những nông trại có quy mô lớn. Quản lý an toàn thực phẩm và truy xuất nguồn gốc các sản phẩm nông nghiệp luôn được ưu tiện hàng
            đầu trong chuỗi sản xuất của KingStar. Tại KingStar chúng tôi mục tiêu hoàn thiện chuỗi giá trị từ nông trại tới bàn ăn, góp
            phần vào sự phát triển bền vững của nền nông nghiệp Việt Nam.
          </Typography>

          <Stack width={"90%"} justifyContent={"center"} direction={"row"} mt={8} flexWrap='wrap' columnGap={4} rowGap={4}>
            {values.map((item, key) => (
              <Stack key={key} border={"1px solid" + themeMUI.palette.secondary.main} p={1} position={"relative"} sx={{}} width={"340px"}>
                <Stack
                  className='icon-legend'
                  sx={{
                    background: themeMUI.palette.primary.main,
                    width: "64px",
                    height: "64px",
                  }}
                  position={"absolute"}
                  top={"-20px"}
                  left={"20px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  border={"1px solid"}
                  borderColor={"secondary.main"}
                  borderRadius={"4px"}
                >
                  <Image src={item.src} width={54} height={54} alt={item.src} />
                </Stack>
                <Stack className='value' direction={"column"} alignItems={"flex-end"} ml={"90px"}>
                  <Typography
                    variant='h3'
                    sx={{
                      fontWeight: 600,
                    }}
                    color={"secondary.main"}
                  >
                    {item.value}
                  </Typography>
                  <Typography color={"common.white"} variant='body1'>
                    {item.label}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Box>
      <footer>
        <Grid
          container
          p={4}
          sx={{
            background: `url(/footerbg.jpg) center 0.898px / cover no-repeat fixed`,
          }}
          color={"white"}
          spacing={8}
        >
          <Grid item xs={12} md={4}>
            <Stack alignItems={"center"}>
              <Stack rowGap={2}>
                <Typography variant='h5'>TRỤ SỞ CHÍNH</Typography>
                <Stack direction={"row"} alignItems={"center"} columnGap={1}>
                  <LocationOnIcon fontSize={"small"} />
                  <Typography variant='body1'>Ngô Quyền, Hàng Bài, Hà Nội</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} columnGap={1}>
                  <PhoneEnabledIcon fontSize={"small"} />
                  <Typography variant='body1'>0832 244 321</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} columnGap={1}>
                  <LocalPostOfficeIcon fontSize={"small"} />
                  <Typography variant='body1'>gejaxn@gela.com.vn</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack alignItems={"center"}>
              <Stack rowGap={2}>
                <Typography variant='h5'>CHI NHÁNH HÀ NỘI</Typography>
                <Stack direction={"row"} alignItems={"center"} columnGap={1}>
                  <LocationOnIcon fontSize={"small"} />
                  <Typography variant='body1'>Ngô Quyền, Hàng Bài, Hà Nội</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} columnGap={1}>
                  <PhoneEnabledIcon fontSize={"small"} />
                  <Typography variant='body1'>0832 244 321</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} columnGap={1}>
                  <LocalPostOfficeIcon fontSize={"small"} />
                  <Typography variant='body1'>gejaxn@gela.com.vn</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack alignItems={"center"}>
              <Stack rowGap={2}>
                <Typography variant='h5'>CHI NHÁNH HỒ CHÍ MINH</Typography>
                <Stack direction={"row"} alignItems={"center"} columnGap={1}>
                  <LocationOnIcon fontSize={"small"} />
                  <Typography variant='body1'>Ngô Quyền, Hàng Bài, Hà Nội</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} columnGap={1}>
                  <PhoneEnabledIcon fontSize={"small"} />
                  <Typography variant='body1'>0832 244 321</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} columnGap={1}>
                  <LocalPostOfficeIcon fontSize={"small"} />
                  <Typography variant='body1'>gejaxn@gela.com.vn</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} my={14}>
            <Stack rowGap={4}>
              <Stack justifyContent={"center"} alignItems={"center"} direction='row' columnGap={4}>
                <a href='https://www.facebook.com/dutran.King/' target={"_blank"}>
                  <FacebookIcon
                    fontSize={"medium"}
                    sx={{
                      "&:hover": {
                        fill: themeMUI.palette.secondary.main,
                        transform: "scale(1.5)",
                      },
                    }}
                  />
                </a>
                <a href='https://www.facebook.com/dutran.King/' target={"_blank"}>
                  <YouTubeIcon
                    fontSize={"medium"}
                    sx={{
                      "&:hover": {
                        fill: themeMUI.palette.secondary.main,
                        transform: "scale(1.5)",
                      },
                    }}
                  />
                </a>
                <a href='https://www.facebook.com/dutran.King/' target={"_blank"}>
                  <InstagramIcon
                    fontSize={"medium"}
                    sx={{
                      "&:hover": {
                        fill: themeMUI.palette.secondary.main,
                        transform: "scale(1.5)",
                      },
                    }}
                  />
                </a>
              </Stack>
              <Stack justifyContent={"center"} alignItems={"center"} direction='row'>
                © GE1 2023. All Rights Reserved
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </footer>
    </Box>
  );
}
