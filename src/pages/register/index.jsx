import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';  // Adicionando ícone de nome
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";

import { Container, Title, Column, TitleCadastro, SubtitleCadastro, Row, Wrapper, CriarText, TextPrivacy } from './styles';

const Register = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            // Enviando os dados para o db.json via API
            const { data } = await api.post('/users', {
                name: formData.name,
                email: formData.email,
                senha: formData.senha,
            });

            if (data) {
                // Usuário cadastrado com sucesso
                navigate('/login');  // Redireciona para a página de login ou feed, conforme a necessidade
            }

        } catch (e) {
            // Caso aconteça algum erro
            console.error("Erro ao cadastrar usuário:", e);
            alert('Erro ao cadastrar, tente novamente!');
        }
    };

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar nas empresas mais desejadas.</Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleCadastro>Comece agora grátis</TitleCadastro>
                        <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input placeholder="Nome Completo" leftIcon={<MdPerson />} name="name" control={control} />
                            {errors.name && <span>Nome é obrigatório</span>}

                            <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
                            {errors.email && <span>E-mail é obrigatório</span>}

                            <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
                            {errors.senha && <span>Senha é obrigatória</span>}

                            <Button title="Criar Minha Conta" variant="secondary" type="submit" />
                        </form>
                        <Row>
                            <TextPrivacy>Ao clicar em "criar minha conta grátis",
                            declaro que aceito as Políticas de 
                            Privacidade e os Termos de Uso da DIO.</TextPrivacy>
                        </Row>
                        <Row>
                           <TextPrivacy><strong>Já tem uma conta?</strong><CriarText onClick={() => navigate('/login')}>Faça login</CriarText></TextPrivacy> 
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
}

export { Register };
