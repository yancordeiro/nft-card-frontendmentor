import {
  colors,
  fontSize,
  fontWidth,
  responsiveWidth,
} from "assets/style/variables";
import styled from "styled-components";
import img from "../../assets/img/image-equilibrium.jpg";

export const card = styled.section`
  width: 100%;
  max-width: 300px;
  height: 500px;
  padding: 20px;
  border-radius: 8px;
  background-color: ${colors.cardBg};

  .card__img {
    height: 53%;
    width: 100%;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-radius: 8px;
    &:hover {
      .card__visible {
        visibility: visible;
        opacity: 1;
        background-color: ${colors.cyanHover};
      }
    }
  }

  .card__visible {
    visibility: hidden;
    cursor: pointer;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    width: 100%;
    height: 100%;
    border-radius: 8px;

    .card__visible-icon {
    }
  }

  .card__text-cont {
    margin: 20px 0;
    h3 {
      font-weight: ${fontWidth.semiBold};
      color: ${colors.white};
      font-size: ${fontSize.large};
      margin-bottom: 15px;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        color: ${colors.cyan};
      }
    }
    p {
      font-size: ${fontSize.medium};
      font-weight: ${fontWidth.light};
      color: ${colors.softBlue};
    }
  }

  .card__info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .card__info-box-left {
      font-size: ${fontSize.small};
      color: ${colors.cyan};
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }
    .card__info-box-right {
      font-size: ${fontSize.small};
      color: ${colors.softBlue};
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }
  }

  .card__footer {
    display: flex;
    align-items: center;
    padding: 20px 0;
    margin: 20px 0 0 0;
    gap: 10px;
    border-top: 1px solid ${colors.line};
    .avatar {
      width: 30px;
      height: 30px;
      border: 1px solid ${colors.white};
      border-radius: 100%;

      img {
        cursor: pointer;
        width: 100%;
      }
    }
    p {
      font-size: ${fontSize.small};
      color: ${colors.softBlue};
      span {
        cursor: pointer;
        color: ${colors.white};
        transition: 0.2s;
        &:hover {
          color: ${colors.cyan};
        }
      }
    }
  }

  @media (max-width: ${responsiveWidth.mobile}) {
    height: 80vh;
    .card__text-cont {
      margin: 10px 0;
    }
    .card__footer {
      padding: 10px 0;
      margin: 5px 0 0 0;
    }
  }
`;
