import styled from '@emotion/styled';

export const StyledHeroLayout = styled.div<{ isSignUp: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: ${({ isSignUp }) => (isSignUp ? '100vh' : '100%')};
  background-color: ${({ theme: { colors } }) => colors.bgBlue};
`;

export const HeroLayoutContents = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

export const StyledStepLayout = styled.section<{ hide: boolean }>`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  border: 1px solid ${({ theme: { colors } }) => colors.mainBlue};
  padding: 24px;
`;

export const StepLayoutWrapper = styled.div<{ hide: boolean }>`
  display: flex;
  justify-content: space-between;
  & > h2 {
    color: ${({ hide, theme: { colors } }) => (hide ? colors.textGrey : colors.mainBlue)};
  }
  & > h6 {
    color: ${({ theme: { colors } }) => colors.lightBlue};
    cursor: pointer;
  }
`;

export const StepLayoutContents = styled.div<{ hide: boolean }>`
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
  flex-direction: column;
  gap: 12px;
`;

export const StyledTableLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TableLayoutActions = styled.section`
  display: flex;
  width: 100%;
  gap: 32px;

  @media only screen and (max-width: 820px) {
    flex-direction: column;
    margin-left: 0;
  }

  & > div {
    margin-left: auto;
    display: flex;
    gap: 12px;

    @media only screen and (max-width: 820px) {
      flex-direction: column;
      margin-left: 0;
    }
  }
`;

export const TableLayoutTitle = styled.h6`
  text-align: center;
  color: ${({ theme: { colors } }) => colors.mainGrey};
`;

export const TableLayoutContents = styled.section`
  .thead {
    @media only screen and (max-width: 820px) {
      display: none;
    }
  }

  .tbody {
    @media only screen and (max-width: 820px) {
      width: 100%;
      float: left;
      border-bottom: none;
    }

    & > .tr {
      position: relative;

      @media only screen and (max-width: 820px) {
        float: left;
        width: 100%;
        position: relative;
        box-shadow: 0 2px 17px 0 rgba(0, 0, 0, 0.07);
        margin-bottom: 30px;
        background-color: ${({ theme: { colors } }) => colors.white};
        border-radius: 10px;
        padding: 30px;
      }

      & > .th {
        border-top: none;

        @media only screen and (max-width: 820px) {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          border-color: ${({ theme: { colors } }) => colors.mainGrey};
          padding: 0 0 30px 0;
        }
      }

      & > .td {
        @media only screen and (max-width: 820px) {
          display: flex;
          border-bottom: none;
          padding: 30px 10px;
          gap: 20px;
        }
      }

      & > .th > span,
      & > .td > span {
        @media only screen and (max-width: 820px) {
          text-align: left;
        }

        :first-of-type {
          display: none;

          @media only screen and (max-width: 820px) {
            display: inline-block;
            max-width: 80px;
            min-width: 80px;

            font-weight: 700;
            font-size: 14px;
            line-height: 20px;
          }
        }
      }
    }
  }
`;

export const Total = styled.p`
  display: flex;
  justify-content: flex-end;
  gap: 4px;
  color: ${({ theme: { colors } }) => colors.textGrey};
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 24px;

  span {
    color: ${({ theme: { colors } }) => colors.lightBlue};
  }
`;
