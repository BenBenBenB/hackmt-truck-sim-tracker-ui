import Button from 'react-bootstrap/Button';


export default function AboutPage() {
    return (
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'yellowgreen'}}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'black', fontFamily: 'Papyrus'}}>
                <marquee behavior="" direction="left" loop>
                    American Truck Simulator, the greatest game of all time, does not track achievements well enough.
                    That's where the real truckers come in. We're here to help you track your progress and get that 100% completion.
                </marquee>
            </h1>
            <div style={{ marginTop: '20px' }}>
                <Button
                    variant="dark"
                    href="https://github.com/BenBenBenB/hackmt-truck-sim-tracker-api"
                    target="_blank"
                    rel="noopener noreferrer">
                    Truck Sim Tracker
                </Button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <Button 
                    variant="dark" 
                    href="https://github.com/BenBenBenB/hackmt-truck-sim-tracker-ui" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    Truck Sim Tracker UI
                </Button>
            </div>
        </div>
    );
}
