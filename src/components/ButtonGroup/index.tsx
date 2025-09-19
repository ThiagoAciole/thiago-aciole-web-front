import { Flex, Link, IconButton } from "@radix-ui/themes";
import { socialLinks } from "../../constants/links";

export const ButtonGroup = () => {
  return (
    <Flex gap="5" align="center" justify="center" style={{ margin: 10 }}>
      {socialLinks.map(({ href, icon: Icon }, index) => (
        <Link key={index} href={href} target="_blank" rel="noopener noreferrer">
          <IconButton color="gray" variant="soft" style={{ cursor: "pointer" }}>
            <Icon size={22} />
          </IconButton>
        </Link>
      ))}
    </Flex>
  );
};
