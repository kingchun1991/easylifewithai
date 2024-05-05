import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
        2022 - {new Date().getFullYear()}{' '}
        <Link
          href="https://https://easylifeiwithai.com/"
          isExternal
          rel="noopener noreferrer"
        >
          EasyLife with AI
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
