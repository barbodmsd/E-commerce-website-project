import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import "./About.css";

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
import { Box, Stack, Typography } from "@mui/material";

export default function About({ theme }) {
  return (
    <>
      <Box p='30px'>
        {" "}
        <Typography fontSize={"2rem"} fontWeight={"bolder"}>
          {" "}
          About Laptop
        </Typography>
      </Box>
      <Stack direction='row' px='30px' mb='50px' minHeight='400px'>
        <Swiper
          direction={"vertical"}
          slidesPerView={"auto"}
          freeMode={true}
          scrollbar={true}
          mousewheel={true}
          modules={[FreeMode, Scrollbar, Mousewheel]}
          className='about-swiper'>
          {/* <SwiperSlide >
                        <h4>Scroll Container</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus,
                            ex eu sagittis faucibus, ligula ipsum sagittis magna, et imperdiet
                            dolor lectus eu libero. Vestibulum venenatis eget turpis sed
                            faucibus. Maecenas in ullamcorper orci, eu ullamcorper sem. Etiam
                            elit ante, luctus non ante sit amet, sodales vulputate odio. Aenean
                            tristique nisl tellus, sit amet fringilla nisl volutpat cursus.
                            Quisque dignissim lectus ac nunc consectetur mattis. Proin vel
                            hendrerit ipsum, et lobortis dolor. Vestibulum convallis, nibh et
                            tincidunt tristique, nisl risus facilisis lectus, ut interdum orci
                            nisl ac nunc. Cras et aliquam felis. Quisque vel ipsum at elit
                            sodales posuere eget non est. Fusce convallis vestibulum dolor non
                            volutpat. Vivamus vestibulum quam ut ultricies pretium.
                        </p>
                        <p>
                            Suspendisse rhoncus fringilla nisl. Mauris eget lorem ac urna
                            consectetur convallis non vel mi. Donec libero dolor, volutpat ut
                            urna sit amet, aliquet molestie purus. Phasellus faucibus, leo vel
                            scelerisque lobortis, ipsum leo sollicitudin metus, eget sagittis
                            ante orci eu ipsum. Nulla ac mauris eu risus sagittis scelerisque
                            iaculis bibendum mauris. Cras ut egestas orci. Cras odio risus,
                            sagittis ut nunc vitae, aliquam consectetur purus. Vivamus ornare
                            nunc vel tellus facilisis, quis dictum elit tincidunt. Donec
                            accumsan nisi at laoreet sodales. Cras at ullamcorper massa.
                            Maecenas at facilisis ex. Nam mollis dignissim purus id efficitur.
                        </p>
                        <p>
                            Curabitur eget aliquam erat. Curabitur a neque vitae purus volutpat
                            elementum. Vivamus quis vestibulum leo, efficitur ullamcorper velit.
                            Integer tincidunt finibus metus vel porta. Mauris sed mauris congue,
                            pretium est nec, malesuada purus. Nulla hendrerit consectetur arcu
                            et lacinia. Suspendisse augue justo, convallis eget arcu in, pretium
                            tempor ligula. Nullam vulputate tincidunt est ut ullamcorper.
                        </p>
                        <p>
                            Curabitur sed sodales leo. Nulla facilisi. Etiam condimentum, nisi
                            id tempor vulputate, nisi justo cursus justo, pellentesque
                            condimentum diam arcu sit amet leo. Cum sociis natoque penatibus et
                            magnis dis parturient montes, nascetur ridiculus mus. In placerat
                            tellus a posuere vehicula. Donec diam massa, efficitur vitae mattis
                            et, pretium in augue. Fusce iaculis mi quis ante venenatis, sit amet
                            pellentesque orci aliquam. Vestibulum elementum posuere vehicula.
                        </p>
                        <p>
                            Sed tincidunt diam a massa pharetra faucibus. Praesent condimentum
                            id arcu nec fringilla. Maecenas faucibus, ante et venenatis
                            interdum, erat mi eleifend dui, at convallis nisl est nec arcu. Duis
                            vitae arcu rhoncus, faucibus magna ut, tempus metus. Cras in nibh
                            sed ipsum consequat rhoncus. Proin fringilla nulla ut augue tempor
                            fermentum. Nunc hendrerit non nisi vitae finibus. Donec eget ornare
                            libero. Aliquam auctor erat enim, a semper risus semper at. In ut
                            dui in metus tincidunt euismod eget et lacus. Aenean et dictum urna,
                            sed rhoncus lorem. Duis pharetra sagittis odio. Etiam a libero ut
                            nisi feugiat tincidunt vel vitae turpis. Maecenas vel orci sit amet
                            lorem hendrerit venenatis sollicitudin ut dui. Quisque rhoncus nibh
                            in massa pretium scelerisque.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus,
                            ex eu sagittis faucibus, ligula ipsum sagittis magna, et imperdiet
                            dolor lectus eu libero. Vestibulum venenatis eget turpis sed
                            faucibus. Maecenas in ullamcorper orci, eu ullamcorper sem. Etiam
                            elit ante, luctus non ante sit amet, sodales vulputate odio. Aenean
                            tristique nisl tellus, sit amet fringilla nisl volutpat cursus.
                            Quisque dignissim lectus ac nunc consectetur mattis. Proin vel
                            hendrerit ipsum, et lobortis dolor. Vestibulum convallis, nibh et
                            tincidunt tristique, nisl risus facilisis lectus, ut interdum orci
                            nisl ac nunc. Cras et aliquam felis. Quisque vel ipsum at elit
                            sodales posuere eget non est. Fusce convallis vestibulum dolor non
                            volutpat. Vivamus vestibulum quam ut ultricies pretium.
                        </p>
                        <p>
                            Suspendisse rhoncus fringilla nisl. Mauris eget lorem ac urna
                            consectetur convallis non vel mi. Donec libero dolor, volutpat ut
                            urna sit amet, aliquet molestie purus. Phasellus faucibus, leo vel
                            scelerisque lobortis, ipsum leo sollicitudin metus, eget sagittis
                            ante orci eu ipsum. Nulla ac mauris eu risus sagittis scelerisque
                            iaculis bibendum mauris. Cras ut egestas orci. Cras odio risus,
                            sagittis ut nunc vitae, aliquam consectetur purus. Vivamus ornare
                            nunc vel tellus facilisis, quis dictum elit tincidunt. Donec
                            accumsan nisi at laoreet sodales. Cras at ullamcorper massa.
                            Maecenas at facilisis ex. Nam mollis dignissim purus id efficitur.
                        </p>
                        <p>
                            Curabitur eget aliquam erat. Curabitur a neque vitae purus volutpat
                            elementum. Vivamus quis vestibulum leo, efficitur ullamcorper velit.
                            Integer tincidunt finibus metus vel porta. Mauris sed mauris congue,
                            pretium est nec, malesuada purus. Nulla hendrerit consectetur arcu
                            et lacinia. Suspendisse augue justo, convallis eget arcu in, pretium
                            tempor ligula. Nullam vulputate tincidunt est ut ullamcorper.
                        </p>
                        <p>
                            Curabitur sed sodales leo. Nulla facilisi. Etiam condimentum, nisi
                            id tempor vulputate, nisi justo cursus justo, pellentesque
                            condimentum diam arcu sit amet leo. Cum sociis natoque penatibus et
                            magnis dis parturient montes, nascetur ridiculus mus. In placerat
                            tellus a posuere vehicula. Donec diam massa, efficitur vitae mattis
                            et, pretium in augue. Fusce iaculis mi quis ante venenatis, sit amet
                            pellentesque orci aliquam. Vestibulum elementum posuere vehicula.
                        </p>
                        <p>
                            Sed tincidunt diam a massa pharetra faucibus. Praesent condimentum
                            id arcu nec fringilla. Maecenas faucibus, ante et venenatis
                            interdum, erat mi eleifend dui, at convallis nisl est nec arcu. Duis
                            vitae arcu rhoncus, faucibus magna ut, tempus metus. Cras in nibh
                            sed ipsum consequat rhoncus. Proin fringilla nulla ut augue tempor
                            fermentum. Nunc hendrerit non nisi vitae finibus. Donec eget ornare
                            libero. Aliquam auctor erat enim, a semper risus semper at. In ut
                            dui in metus tincidunt euismod eget et lacus. Aenean et dictum urna,
                            sed rhoncus lorem. Duis pharetra sagittis odio. Etiam a libero ut
                            nisi feugiat tincidunt vel vitae turpis. Maecenas vel orci sit amet
                            lorem hendrerit venenatis sollicitudin ut dui. Quisque rhoncus nibh
                            in massa pretium scelerisque.
                        </p>
                    </SwiperSlide> */}
          <SwiperSlide>
            <Box>
              <Typography
                sx={{ color: theme == "light" ? "#4f4f4f" : "txt.three" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                quae nam, perspiciatis praesentium aspernatur debitis vitae
                tempora unde labore nobis? Ipsam magnam quia tempore omnis
                fugit, libero adipisci beatae labore exercitationem? Perferendis
                distinctio culpa velit et in dolores commodi saepe itaque minus
                beatae obcaecati, autem maiores dolor illum atque hic temporibus
                tempora dignissimos mollitia, cumque alias est quaerat? Eveniet
                omnis aspernatur beatae doloremque amet eligendi. Corporis,
                doloremque! Earum accusantium voluptas sint dicta voluptate
                veniam quisquam sed qui placeat quas aliquid ea quod, soluta
                provident explicabo unde facilis eligendi? Laborum dignissimos
                tempora tenetur doloribus sequi necessitatibus amet animi
                possimus illo vel.
              </Typography>
              <Typography
                sx={{ color: theme == "light" ? "#4f4f4f" : "txt.three" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                quae nam, perspiciatis praesentium aspernatur debitis vitae
                tempora unde labore nobis? Ipsam magnam quia tempore omnis
                fugit, libero adipisci beatae labore exercitationem? Perferendis
                distinctio culpa velit et in dolores commodi saepe itaque minus
                beatae obcaecati, autem maiores dolor illum atque hic temporibus
                tempora dignissimos mollitia, cumque alias est quaerat? Eveniet
                omnis aspernatur beatae doloremque amet eligendi. Corporis,
                doloremque! Earum accusantium voluptas sint dicta voluptate
                veniam quisquam sed qui placeat quas aliquid ea quod, soluta
                provident explicabo unde facilis eligendi? Laborum dignissimos
                tempora tenetur doloribus sequi necessitatibus amet animi
                possimus illo vel.
              </Typography>
              <Typography
                sx={{ color: theme == "light" ? "#4f4f4f" : "txt.three" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                quae nam, perspiciatis praesentium aspernatur debitis vitae
                tempora unde labore nobis? Ipsam magnam quia tempore omnis
                fugit, libero adipisci beatae labore exercitationem? Perferendis
                distinctio culpa velit et in dolores commodi saepe itaque minus
                beatae obcaecati, autem maiores dolor illum atque hic temporibus
                tempora dignissimos mollitia, cumque alias est quaerat? Eveniet
                omnis aspernatur beatae doloremque amet eligendi. Corporis,
                doloremque! Earum accusantium voluptas sint dicta voluptate
                veniam quisquam sed qui placeat quas aliquid ea quod, soluta
                provident explicabo unde facilis eligendi? Laborum dignissimos
                tempora tenetur doloribus sequi necessitatibus amet animi
                possimus illo vel.
              </Typography>
              <Typography
                sx={{ color: theme == "light" ? "#4f4f4f" : "txt.three" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                quae nam, perspiciatis praesentium aspernatur debitis vitae
                tempora unde labore nobis? Ipsam magnam quia tempore omnis
                fugit, libero adipisci beatae labore exercitationem? Perferendis
                distinctio culpa velit et in dolores commodi saepe itaque minus
                beatae obcaecati, autem maiores dolor illum atque hic temporibus
                tempora dignissimos mollitia, cumque alias est quaerat? Eveniet
                omnis aspernatur beatae doloremque amet eligendi. Corporis,
                doloremque! Earum accusantium voluptas sint dicta voluptate
                veniam quisquam sed qui placeat quas aliquid ea quod, soluta
                provident explicabo unde facilis eligendi? Laborum dignissimos
                tempora tenetur doloribus sequi necessitatibus amet animi
                possimus illo vel.
              </Typography>
              <Typography
                sx={{ color: theme == "light" ? "#4f4f4f" : "txt.three" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                quae nam, perspiciatis praesentium aspernatur debitis vitae
                tempora unde labore nobis? Ipsam magnam quia tempore omnis
                fugit, libero adipisci beatae labore exercitationem? Perferendis
                distinctio culpa velit et in dolores commodi saepe itaque minus
                beatae obcaecati, autem maiores dolor illum atque hic temporibus
                tempora dignissimos mollitia, cumque alias est quaerat? Eveniet
                omnis aspernatur beatae doloremque amet eligendi. Corporis,
                doloremque! Earum accusantium voluptas sint dicta voluptate
                veniam quisquam sed qui placeat quas aliquid ea quod, soluta
                provident explicabo unde facilis eligendi? Laborum dignissimos
                tempora tenetur doloribus sequi necessitatibus amet animi
                possimus illo vel.
              </Typography>
              <Typography
                sx={{ color: theme == "light" ? "#4f4f4f" : "txt.three" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                quae nam, perspiciatis praesentium aspernatur debitis vitae
                tempora unde labore nobis? Ipsam magnam quia tempore omnis
                fugit, libero adipisci beatae labore exercitationem? Perferendis
                distinctio culpa velit et in dolores commodi saepe itaque minus
                beatae obcaecati, autem maiores dolor illum atque hic temporibus
                tempora dignissimos mollitia, cumque alias est quaerat? Eveniet
                omnis aspernatur beatae doloremque amet eligendi. Corporis,
                doloremque! Earum accusantium voluptas sint dicta voluptate
                veniam quisquam sed qui placeat quas aliquid ea quod, soluta
                provident explicabo unde facilis eligendi? Laborum dignissimos
                tempora tenetur doloribus sequi necessitatibus amet animi
                possimus illo vel.
              </Typography>
              <Typography
                sx={{ color: theme == "light" ? "#4f4f4f" : "txt.three" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                quae nam, perspiciatis praesentium aspernatur debitis vitae
                tempora unde labore nobis? Ipsam magnam quia tempore omnis
                fugit, libero adipisci beatae labore exercitationem? Perferendis
                distinctio culpa velit et in dolores commodi saepe itaque minus
                beatae obcaecati, autem maiores dolor illum atque hic temporibus
                tempora dignissimos mollitia, cumque alias est quaerat? Eveniet
                omnis aspernatur beatae doloremque amet eligendi. Corporis,
                doloremque! Earum accusantium voluptas sint dicta voluptate
                veniam quisquam sed qui placeat quas aliquid ea quod, soluta
                provident explicabo unde facilis eligendi? Laborum dignissimos
                tempora tenetur doloribus sequi necessitatibus amet animi
                possimus illo vel.
              </Typography>
              <Typography
                sx={{ color: theme == "light" ? "#4f4f4f" : "txt.three" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                quae nam, perspiciatis praesentium aspernatur debitis vitae
                tempora unde labore nobis? Ipsam magnam quia tempore omnis
                fugit, libero adipisci beatae labore exercitationem? Perferendis
                distinctio culpa velit et in dolores commodi saepe itaque minus
                beatae obcaecati, autem maiores dolor illum atque hic temporibus
                tempora dignissimos mollitia, cumque alias est quaerat? Eveniet
                omnis aspernatur beatae doloremque amet eligendi. Corporis,
                doloremque! Earum accusantium voluptas sint dicta voluptate
                veniam quisquam sed qui placeat quas aliquid ea quod, soluta
                provident explicabo unde facilis eligendi? Laborum dignissimos
                tempora tenetur doloribus sequi necessitatibus amet animi
                possimus illo vel.
              </Typography>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Stack>
    </>
  );
}
