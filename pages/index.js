import {Box, Button, Text, TextField, Image} from '@skynexui/components';
import React from 'react';
import {useRouter} from 'next/router';
import appConfig from '../config.json';




function Titulo(props){
    const Tag = props.tag ||'h1';
    return(
        <>
        <Tag>{props.children}</Tag>
        <style jsx>{`
        ${Tag}{
            color:${appConfig.theme.colors.neutrals['000']};
            font-size:24px;
            font-weight:600;
        }
        `}</style>
        </>
    );
}
 
//  export default HomePage

export default function PaginaInicial() {
    //const username = 'Adelmo-Jr';
    const [username, setUsername] = React.useState('');
    const roteamento = useRouter();

    return (
      <>
       
       
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[150],
            backgroundImage: 'url(https://images.unsplash.com/photo-1551195441-713ee66a2379?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)' ,
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(60 30 70 / 100%)',
              backgroundColor: appConfig.theme.colors.neutrals[999],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function(infosDoEvento){
                  infosDoEvento.preventDefault();
                  console.log('Alguém submeteu o form');
                roteamento.push(`/chat?username=${username}`);
                }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Titulo tag="h2">Boas vindas de volta!</Titulo>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>
  
             {/* <input 
              type="text"
              value={username}
              onChange={function (event){
                 console.log('usuario digitou',event.target.value);
                //Onde esta o valor?
                 const valor=event.target.value;
                //Trocar o valor da variavel
                //Atraves do React e avise quem precisa
                setUsername(valor);
            }}

              />*/}
              <TextField
               placeholder='Digite seu username do GitHub...'
               value={username}
               onChange={function (event){
                console.log('usuario digitou',event.target.value);
               //Onde esta o valor?
                const valor=event.target.value;
               //Trocar o valor da variavel
               //Atraves do React e avise quem precisa
               setUsername(valor);
           }}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[800],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
            />
              <Button
                type='submit'
                label='ENTRAR'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[900],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.primary[800],
                }}
                styleSheet={{
                  marginTop: "12px",
                  fontWeight: "900",
                }}
                disabled={username.length < 3}
                
                
              />
              
               <Button
              type="submit"
              label="CRIAR CONTA NO GITHUB"
              href="https://github.com/signup?source=login"
              iconName="github"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["100"],
                mainColor: appConfig.theme.colors.neutrals[900],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.neutrals[800],
              }}
              styleSheet={{
                marginTop: "12px",
                fontWeight: "900",
              }}
            />
            </Box>
            
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[700],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '19px',
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
             
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }