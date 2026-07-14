import React from 'react';
import styled from 'styled-components';

interface AppDownloadProps {}

const AppDownload: React.FC<AppDownloadProps> = () => {
  return (
    <AppWrapper>
      <ContentContainer>
        <DownloadSection>
          <ContentArea>
            <DownloadTag>DOWNLOAD APP</DownloadTag>
            <MainHeading>Get Started With Fudo Today!</MainHeading>
            <Description>
              Discover food wherever and whenever and get your food delivered
              quickly.
            </Description>
          </ContentArea>
          <ImageWrapper>
            <DeliveryImage
              loading="lazy"
              src={undefined}
              alt="Food delivery illustration"
            />
          </ImageWrapper>
        </DownloadSection>
        <DeliveryStatus>
          <StatusIndicator />
          <StatusCard>
            <CourierImage
              loading="lazy"
              src={undefined}
              alt="Courier profile"
            />
            <StatusMessage>Your Food Has Arrived</StatusMessage>
          </StatusCard>
          <LocationPin
            loading="lazy"
            src={undefined}
            alt="Location pin"
          />
        </DeliveryStatus>
        <CourierInfo>
          <GetAppButton>Get The App</GetAppButton>
          <CourierCard>
            <StatusDot />
            <CardContent>
              <CourierDetails>
                <CourierAvatar
                  loading="lazy"
                  src={undefined}
                  alt="Courier avatar"
                />
                <CourierText>
                  <CourierName>Richard Watson</CourierName>
                  <CourierRole>Food Courier</CourierRole>
                </CourierText>
              </CourierDetails>
              <CallIcon
                loading="lazy"
                src={undefined}
                alt="Call icon"
              />
            </CardContent>
          </CourierCard>
        </CourierInfo>
      </ContentContainer>
      <BackgroundDecoration1 src={undefined} alt="" />
      <BackgroundDecoration2 src={undefined} alt="" />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  font-family: Poppins, sans-serif;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 83px 72px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const ContentContainer = styled.div`
  border-radius: 30px;
  background-color: rgba(255, 221, 204, 0.25);
  display: flex;
  min-width: 240px;
  flex-direction: column;
  overflow: hidden;
  width: 1250px;
  padding: 74px 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const DownloadSection = styled.section`
  z-index: 10;
  display: flex;
  flex-direction: column;
  padding: 42px 80px 0;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const ContentArea = styled.div`
  display: flex;
  margin-top: 42px;
  width: 421px;
  max-width: 100%;
  flex-direction: column;
  font-size: 18px;
  color: var(--Gray-1, #333);
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const DownloadTag = styled.span`
  color: var(--Red, #eb5757);
  font-weight: 600;
  line-height: 1;
  letter-spacing: 2.88px;
  align-self: flex-start;
`;

const MainHeading = styled.h1`
  font-size: 46px;
  font-weight: 700;
  line-height: 60px;
  margin: 25px 36px 0 0;
  @media (max-width: 991px) {
    margin-right: 10px;
    font-size: 40px;
    line-height: 59px;
  }
`;

const Description = styled.p`
  font-weight: 500;
  line-height: 30px;
  margin-top: 42px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const ImageWrapper = styled.div`
  align-self: flex-end;
  margin-top: -340px;
  @media (max-width: 991px) {
    margin-top: -200px;
  }
`;

const DeliveryImage = styled.img`
  aspect-ratio: 0.88;
  object-fit: contain;
  object-position: center;
  width: 453px;
  border-radius: 0;
  max-width: 100%;
`;

const DeliveryStatus = styled.div`
  align-self: center;
  z-index: 10;
  display: flex;
  width: 118px;
  max-width: 100%;
  flex-direction: column;
  align-items: flex-end;
  font-size: 13px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  line-height: 22px;
  margin: -290px 0 0 13px;
  @media (max-width: 991px) {
    margin-top: -200px;
  }
`;

const StatusIndicator = styled.div`
  border-radius: 40px;
  background-color: var(--Red, #eb5757);
  width: 10px;
  height: 10px;
  @media (max-width: 991px) {
    margin-right: 10px;
  }
`;

const StatusCard = styled.div`
  justify-content: flex-end;
  border-radius: 15px;
  background-color: var(--Red, #eb5757);
  align-self: stretch;
  display: flex;
  margin-top: 125px;
  flex-direction: column;
  overflow: hidden;
  padding: 19px 12px 9px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const CourierImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 70px;
  border-radius: 40px;
  align-self: center;
`;

const StatusMessage = styled.p`
  margin-top: 12px;
`;

const LocationPin = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 30px;
  margin-top: 38px;
  @media (max-width: 991px) {
    margin-right: 10px;
  }
`;

const CourierInfo = styled.div`
  display: flex;
  width: 612px;
  max-width: 100%;
  flex-direction: column;
  font-weight: 500;
  margin: -200px 0 0 85px;
`;

const GetAppButton = styled.button`
  align-self: flex-start;
  border-radius: 50px;
  background-color: var(--Red, #eb5757);
  min-height: 68px;
  font-size: 18px;
  color: #fff;
  line-height: 1;
  padding: 23px 20px;
  border: none;
  cursor: pointer;
`;

const CourierCard = styled.div`
  align-self: flex-end;
  z-index: 10;
  display: flex;
  margin-top: -35px;
  width: 294px;
  max-width: 100%;
  flex-direction: column;
`;

const StatusDot = styled.div`
  border-radius: 40px;
  background-color: var(--Yellow, #f2c94c);
  align-self: center;
  width: 8px;
  height: 8px;
`;

const CardContent = styled.div`
  border-radius: 50px;
  background-color: #fff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
  display: flex;
  margin-top: 20px;
  min-height: 71px;
  width: 100%;
  align-items: center;
  gap: 34px;
  justify-content: space-between;
  padding: 12px 15px;
`;

const CourierDetails = styled.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: 33px;
  justify-content: space-between;
  width: 192px;
  margin: auto 0;
`;

const CourierAvatar = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 38px;
  border-radius: 50px;
  align-self: stretch;
  margin: auto 0;
`;

const CourierText = styled.div`
  border-radius: 0;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  width: 121px;
  margin: auto 0;
`;

const CourierName = styled.span`
  color: #000;
  font-size: 15px;
  line-height: 1;
`;

const CourierRole = styled.span`
  color: var(--Gray-3, #828282);
  font-size: 12px;
  line-height: 22px;
  align-self: flex-start;
`;

const CallIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 38px;
  fill: var(--Red, #eb5757);
  align-self: stretch;
  margin: auto 0;
`;

const BackgroundDecoration1 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 46px;
`;

const BackgroundDecoration2 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 46px;
`;

export default AppDownload;