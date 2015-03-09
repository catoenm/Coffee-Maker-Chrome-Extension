import jssc.*;

public static void main(String [] args){
	serialPort = new SerialPort("COM1");
	try {
    serialPort.openPort();

    serialPort.setParams(SerialPort.BAUDRATE_9600,
                         SerialPort.DATABITS_8,
                         SerialPort.STOPBITS_1,
                         SerialPort.PARITY_NONE);

    serialPort.setFlowControlMode(SerialPort.FLOWCONTROL_RTSCTS_IN | 
                                  SerialPort.FLOWCONTROL_RTSCTS_OUT);

    serialPort.addEventListener(new PortReader(), SerialPort.MASK_RXCHAR);

    	serialPort.writeString("Hurrah!");
	}
catch (SerialPortException ex) {
    System.out.println("There are an error on writing string to port т: " + ex);
}
}