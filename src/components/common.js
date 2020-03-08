import styled from 'styled-components';

export const Icon = styled.svg`
  width: 80%;
  height: 100%;
  justify-self: center;

  @media screen and (mih-width: 992px) {
    width: 70%;
  }
`;

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
  box-sizing: border-box;

  &:after,
  &:before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    bottom: -1px;
    border-bottom: 10px solid #f6f6f6;
    z-index: 2;
  }

  &:before {
    left: 0;
    border-right: 12px solid transparent;
    border-left: calc(50vw - 12px) solid #f6f6f6;
  }

  &:after {
    right: 0;
    border-left: 12px solid transparent;
    border-right: calc(50vw - 12px) solid #f6f6f6;
  }
`;

export const GreySection = styled(Section)`
  position: relative;
  background-color: #f6f6f6;

  &:after,
    &:before {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      bottom: -1px;
      border-bottom: 10px solid #fff;
      z-index: 2;
    }

    &:before {
      left: 0;
      border-right: 12px solid transparent;
      border-left: calc(50vw - 12px) solid #fff;
    }

    &:after {
      right: 0;
      border-left: 12px solid transparent;
      border-right: calc(50vw - 12px) solid #fff;
    }
`

export const SectionTitle = styled.h2`
  font-size: 3em;
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: normal;
  color: #1b5cce;
  text-align: center;
  width: 100%;
  margin: 5% auto;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
  &:hover {
    transform: translateY(-5px) !important;
  }

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

export const IconWrap = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  border: solid 1px #eff2f9;
  background-color: #f8faff;
  margin-bottom: 30px;
  position: relative;
  > svg {
    transition: all 0.3s ease-in;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    > svg {
      transform: translate(-50%, -50%) rotateY(360deg);
    }
  }
`;

export const BoxTitle = styled.h4`
  font-size: 24px;
  font-weight: 300;
  line-height: normal;
  color: #5273c7;
`;

export const Text = styled.div`
  font-size: 1.8em;
  width: 100%;
  font-weight: 300;
  letter-spacing: 0.02em;
  line-height: normal;
  text-align: justify;
  padding: 2% 0;
  color: black;
`

export const SectionWrapper = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
`