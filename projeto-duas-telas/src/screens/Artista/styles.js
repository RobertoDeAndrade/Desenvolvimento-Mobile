import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #1a1a1a;
`;

export const ViewHeader = styled.View`
    width: 100%;
    height: 60px;
    padding: 10px;
`;

export const Title = styled.Text`
    color: #00BCD4;
    font-size: 14px;
    margin: 15px 0 0 20px;
    font-weight: 700;
`;

export const SubTitle = styled.Text`
    color: #FFF;
    font-size: 30px;
    font-weight: 700;
    margin: 0 0 20px 20px;
`;

export const ViewContainer = styled.View`
    flex-direction: row;
`;

export const ViewContainer1 = styled.View`
    border: 2px solid #FFF;
    margin: 15px 0 15px 15px;
    width: 150px;
    height: 40px;
    text-align: center;
    border-radius: 10px;
    padding: 4px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ViewContainer2 = styled.View`
    border: 2px solid #FFF;
    margin: 15px 0 15px 15px;
    width: 90px;
    height: 40px;
    text-align: center;
    border-radius: 10px;
    padding: 4px;
    justify-content: center;
    align-items: center;
`;

export const Text1 = styled.Text`
    color: #FFF;
    font-size: 16px;
    margin: 0 10px 0 10px;
`;

export const Text2 = styled.Text`
    color: #FFF;
    font-size: 16px;
`;

export const ViewArtista = styled.View`
    flex-direction: row;
    padding: 10px;
`;

export const ImageArtista = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 50px;
    margin-left: 10px;
    margin-top: 10px;
`;

export const TextArtista1 = styled.Text`
    color: #FFF;
    font-size: 18px;
    margin: auto;
    width: 180px;
`;

export const TextArtista2 = styled.Text`
    color: #FFF;
    font-size: 20px;
    margin: auto;
    font-weight: 800;
`;

export const ViewFooter = styled.View`
    background-color: #212121;
    height: 70px;
    width: 97%;
    margin: auto;
    border-radius: 10px;
    justify-content: center;
    top: 9%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
`;