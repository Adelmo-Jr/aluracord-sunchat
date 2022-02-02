import React from 'react';
import { Box, Button, Text, Image } from '@skynexui/components';
import appConfig from '../../config.json';


export function ButtonSendSticker(props) {
    const [isOpen, setOpenState] = React.useState('');
  
    return (
      <Box
        styleSheet={{
          position: 'relative',
        }}
      >
        <Button
          styleSheet={{
            borderRadius: '50%',
            padding: '0 1px 0 0', 
            minWidth: '50px',
            minHeight: '50px',
            fontSize: '20px',
            marginBottom: '2px',
            lineHeight: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin:'6px',
            backgroundColor: "rgba(525, 255, 255,0.70)",
            filter: isOpen ? 'grayscale(0)' : 'grayscale(1)',
            boxShadow: ' 0 0 2em rgb( 60, 30, 70)', 
          }
      }
      buttonColors={{
          contrastColor: appConfig.theme.colors.primary[100],
          mainColor: appConfig.theme.colors.primary["000"],
          mainColorLight: appConfig.theme.colors.neutrals[800],
          mainColorStrong: appConfig.theme.colors.neutrals[800],
      
            hover: {
              filter: 'grayscale(0)',
            }
          }}
          label={isOpen ? "😁" : "🙂"}
          onClick={() => setOpenState(!isOpen)}
        />

        {isOpen && (
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '10px',
              position: 'absolute',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              width: {
                  xs: '200px',
                  sm: '490px',
              },
              height: '400px',
              right: '30px',
              bottom: '30px',
              padding: '15px',
              boxShadow: 'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px',
            }}
            onClick={() => setOpenState(false)}
          >
            <Text
              styleSheet={{
                color: appConfig.theme.colors.neutrals["000"],
                fontWeight: 'bold',
              }}
            >
              Figurinhas
            </Text>
            <Box
              tag="ul"
              styleSheet={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                flex: 1,
                paddingTop: '16px',
                overflow: 'scroll',
                cursor:'pointer'
              }}
            >
              {appConfig.stickers.map((sticker) => (
                <Text
                onClick={()=>{
                  //console.log('[DENTRO DO COMPONENTE]Clicou no sticker:',sticker);
                  if(Boolean (props.onStickerClick)){
                    props.onStickerClick(sticker);
                  }
                  
                }}
                  tag="li" key={sticker}
                  styleSheet={{
                    width: '50%',
                    borderRadius: '5px',
                    padding: '10px',
                    focus: {
                      backgroundColor: appConfig.theme.colors.neutrals[600],
                    },
                    hover: {
                      backgroundColor: appConfig.theme.colors.neutrals[600],
                    }
                  }}
                >
                  <Image src={sticker} />
                </Text>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    )
  }