import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

const DateTime = styled.p`
  font-size: 64px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  margin: 10px 0;
`;

const Losses = styled.span`
  font-size: 32px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
`;

export const Info = () => {
  const today = new Date();
  const startDate = new Date("2022-02-24");
  const endDate = new Date(startDate.setDate(startDate.getDate()));

  const days = parseInt((today - endDate) / (1000 * 60 * 60 * 24));
  const hours = parseInt((Math.abs(today - endDate) / (1000 * 60 * 60)) % 24);
  // const minutes = parseInt(
  //   (Math.abs(today.getTime() - endDate.getTime()) / (1000 * 60)) % 60
  // );
  // const seconds = parseInt(
  //   (Math.abs(endDate.getTime() - today.getTime()) / 1000) % 60
  // );

  const losses = {
    Civilians: "2734-3000",
    Troops: "2500-3000",
  };

  return (
    <Container>
      <DateTime>{`${days} days ${hours} hours`}</DateTime>
      <VerticalContainer>
        {Object.entries(losses).map(([a, b]) => (
          <Losses>
            {a}: {b}
          </Losses>
        ))}
      </VerticalContainer>
    </Container>
  );
};
