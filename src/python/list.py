from head import *

def list():

    message = ['(INFO, MIDI) Inputs', '    -1: Void (bypass)']

    message.extend(
        '    %i: %s' % (i, in_dev.get_port_name(i))
        for i in range(in_dev.get_port_count())
    )
    message.extend(('(INFO, MIDI) Outputs', '    -1: Void (bypass)'))
    message.extend(
        '    %i: %s' % (i, out_dev.get_port_name(i))
        for i in range(out_dev.get_port_count())
    )
    ipc_send('log', '\n'.join(message))


if __name__ == '__main__':

    []
