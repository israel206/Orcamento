import styled from 'styled-components/native';
// estilos do scomponentes
export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 15px;
    justify-content: flex-start;
    background-color: #fff;
`;

export const TitleInput = styled.Text`
    padding-top: 1px;
    color: #111;
    font-size: 18px;
`;

export const InputForm = styled.TextInput`
    background-color: #fff;
    width: 100%;
    margin-bottom: 15px;
    color: #222;
    font-size: 18px;
    padding: 10px;
    border-radius: 7px;
    border-color: #171941;
    border-width: 1px;
`;

export const BtnSubmitForm = styled.TouchableOpacity`
    background-color: #050c3d;
    width: 100%;
    height: 45px;
    border-radius: 7px;
    align-items: center;
    justify-content: center
`;

export const TxtSubmitForm = styled.Text`
    color: #00a1fc;
    font-size: 22px;
`;

export const LoadingArea = styled.View`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.6);
    align-items: center;
    justify-content: center;
`;