import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Card, CardHeader, CardContent, Avatar, IconButton, Typography, Button, TextField, Box} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import naner from './../naner.png';

import {utils} from 'ethers';

import {BigNumberish, BigNumber} from 'ethers';
import { MonkeBonfireContext, MonkeContext, CurrentAddressContext, ERC20Context } from "../hardhat/SymfoniContext";

interface Props { }

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    fancy: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
      avatar: {
        backgroundColor: red[500],
      },
      coinicon: {
        height: 48,
      },
  });

export const MonkeBonfire: React.FC<Props> = () => {
    const classes = useStyles();

    const bonfire = useContext(MonkeBonfireContext)
    const monke = useContext(MonkeContext)
    
    const [currentAddress, setCurrentAddress] = useContext(CurrentAddressContext)
    const [currentMonkeBalance, setCurrentMonkeBalance] = useState("")
    const [currentNanerBalance, setCurrentNanerBalance] = useState("")
    const [currentMonkeAllowance, setCurrentMonkeAllowance] = useState("");

    const [isApproved, setIsApproved] = useState(false);


    
    const [inputBurnCount, setInputBurnCount] = useState("1000");
    //const [inputTokenCount, setInputTokenCount] = useState("115792089237316195423570985008687907853269984665640564002661220870532614462891");
    useEffect(() => {
        const doAsync = async () => {
            if (!bonfire.instance) return
            if (!monke.instance) return
            console.log("bonfire is deployed at ", bonfire.instance.address)
            setCurrentMonkeBalance(utils.formatEther(await monke.instance.balanceOf(currentAddress)))
            setIsApproved((await monke.instance.allowance(currentAddress, bonfire.instance.address)).gt("0"))
            setCurrentMonkeAllowance(await utils.formatEther(await monke.instance.allowance(currentAddress, bonfire.instance.address)))
        };
        doAsync();
    }, [bonfire])

    const handleApproveSpending = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!monke.instance) throw Error("Monke instance not ready")
        if (!bonfire.instance) throw Error("bonfire instance not ready")
        if (bonfire.instance) {
            if (monke.instance) {
                const tx = await monke.instance.approve(bonfire.instance.address, "115792089237316195423570985008687907853269984665640564002661220870532614462891")
                console.log("Approve tx", tx)
                await tx.wait()
                console.log("New allowance value, result: ", await monke.instance.allowance(currentAddress, bonfire.instance.address))
            }
        }
    }
    const handleBurnMonke = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!bonfire.instance) throw Error("bonfire instance not ready")
        if (bonfire.instance) {
            const tx = await bonfire.instance.swap(utils.parseEther(inputBurnCount))
            console.log("setGreeting tx", tx)
            await tx.wait()
            //console.log("New greeting mined, result: ", await bonfire.instance.BURN_RATIO())
        }
    }
    const renderApprovalOrBurnButton = () => {
        return isApproved ? (
            <div>
                <TextField id="outlined-basic" label="Burn Ammount (Monke)" variant="filled" onChange={(e) => setInputBurnCount(e.target.value)} />
                <Button className={classes.fancy} variant="outlined" color="secondary" onClick={(e) => handleBurnMonke(e)}>Burn</Button>
            </div>
        ) : (
            <div><Button className={classes.fancy} variant="contained" color="primary" onClick={(e) => handleApproveSpending(e)}>Approve</Button></div>
        )
    }
    return (
        <div>
            <Container maxWidth="sm">
                <Box component="span" m={4}>
                    <Card variant="outlined">
                    <CardHeader
                        avatar={
                        <Avatar aria-label="naner" className={classes.avatar}>
                            <img src={naner} alt="naner" className={classes.coinicon} />
                        </Avatar>
                        }
                        title={
                            <Typography variant="h6" component="h6" color="textSecondary" gutterBottom>
                                Monke for Naner Burn Contract
                            </Typography>
                        }
                        subheader="Ratio: 1 Naner for ever 1000 Monke"
                    />
                        <CardContent>
                            <p>
                                {renderApprovalOrBurnButton()}
                            </p>
                            <p>
                                <Typography variant="h6" component="h6">
                                    Monke Balance:
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    {currentMonkeBalance}
                                </Typography>
                            </p>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </div>
    )
}