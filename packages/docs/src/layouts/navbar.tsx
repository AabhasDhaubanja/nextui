import React from 'react';
import { Logo } from '@components';
import NextLink from 'next/link';
import { Container, Row, Col, Spacer, Link, Text } from '@nextui/react';

const Navbar: React.FC = () => {
  return (
    <Container
      className="navbar__container"
      display="flex"
      alignItems="center"
      as="nav"
      gap={0}
    >
      <Row justify="space-between" align="center">
        <Col>
          <NextLink href="/">
            <Link>
              <Logo className="navbar__logo" />
            </Link>
          </NextLink>
        </Col>
        <Col>
          <Row justify="center" align="center">
            <NextLink href="#">
              <Link>Guide</Link>
            </NextLink>
            <Spacer x={1} y={0} />
            <NextLink href="/docs/guide/introduction">
              <Link href="#">Docs</Link>
            </NextLink>
            <Spacer x={1} y={0} />
            <NextLink href="#">
              <Link href="#">Ecosystem</Link>
            </NextLink>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Text>Search</Text>
          </Row>
        </Col>
      </Row>
      <style jsx>{`
        :global(.navbar__container) {
          min-height: var(--navbar-height);
          max-height: var(--navbar-height);
        }
        :global(.navbar__logo) {
          cursor: pointer;
        }
      `}</style>
    </Container>
  );
};

export default Navbar;
