import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image } from "@chakra-ui/react";
import Hero from "../components/Hero";
import PicWithText from "../components/PicWithText";
import RichText from "../components/RichText";

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading....</div>;

  return (
    <Box>
      <Hero />
      <RichText
        heading="The relaxation you've been waiting for."
        text="Our Bath Bombs guarantee a fun, relaxing, and colorful night."
      />
      <Grid templateColumns="repeat(3, 1fr)">
        {products.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.id}>
            <Box
              _hover={{ opacity: "80%" }}
              textAlign="center"
              position="relative"
            >
              <Image src={product.images[0].src} />
              <Text position="absolute" bottom="15%" w="100%">
                {product.title}
              </Text>
              <Text position="absolute" bottom="5%" w="100%" fontWeight="bold">
                ${product.variants[0].price}
              </Text>
            </Box>
          </Link>
        ))}
      </Grid>
      <PicWithText
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758"
        heading="Heading"
        text=" They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all."
      />
      <PicWithText
        reverse
        image="https://reviewed-com-res.cloudinary.com/image/fetch/s--BCvg2tyT--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_1200/https://reviewed-production.s3.amazonaws.com/1611676532795/kobeza.jpg"
        heading="Heading"
        text=" They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all."
      />
    </Box>
  );
};

export default Home;
