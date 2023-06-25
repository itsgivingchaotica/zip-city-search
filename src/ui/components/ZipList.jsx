import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const ZipList = () => {
    return (
        <Card variant="outlined" sx={{ height: '100%'}}>
            {/* map card content */}
            <CardContent sx={{ borderBottom: '2px solid black'}}>
                New York
            </CardContent>
            <CardContent>
                10002
            </CardContent>
            <CardContent>
                10002
            </CardContent>
            <CardContent>
                10002
            </CardContent>
            <CardContent>
                10002
            </CardContent>
            <CardContent>
                10002
            </CardContent>
        </Card>
    )
}