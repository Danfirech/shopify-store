import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { Flex, Text, Icon, Image, Box, Badge } from "@chakra-ui/react";
import { MdMenu, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      padding="2rem"
      backgroundColor="#FFA8E2"
      alignItems="center"
    >
      <Icon
        fill="white"
        as={MdMenu}
        w={30}
        h={30}
        cursor="pointer"
        onClick={() => openMenu()}
      >
        Menu
      </Icon>
      <Link to="/">
        <Image
          src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540"
          w={100}
          h={100}
        />
      </Link>
      <Box>
        <Icon
          fill="white"
          as={MdShoppingCart}
          cursor="pointer"
          w={30}
          h={30}
          onClick={() => openCart()}
        />
        <Badge alignItems="center" backgroundColor="#FF38BD" borderRadius="50%">
          {checkout.lineItems?.length}
        </Badge>
      </Box>
    </Flex>
  );
};

export default Navbar;
