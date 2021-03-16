import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';

import styles from './styles';

const TodoList = ({navigation}) => {
  const { params } = useRoute();
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "taskName": "Pagar contas",
    },
    {
      "id": 2,
      "taskName": "Colocar o lixo na rua",
    }
  ]);

  useEffect(() => {
    const getTasks = () => {
      setTasks(tasks => [...tasks, params.taskObject])
    }

    getTasks();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text testID='titleList' style={styles.title}>Lista de tarefas</Text>
      </View>

      { tasks.map((task) => (
        <View key={task.id} style={styles.containerTask}>

            <View style={styles.containerInfos}>
              <Text style={styles.titleTasks}>Nome da tarefa</Text>
              <Text testID={`task_${task.taskName}`} style={styles.taskName}>{task.taskName}</Text>
            </View>

            <View style={styles.containerOptions}>
              <TouchableOpacity testID='editButton' onPress={() => {}}>
                <Text style={styles.editText}>Editar</Text>
              </TouchableOpacity>

              <TouchableOpacity testID={`delete_${task.taskName}`} onPress={() => Alert.alert("Excluir Tarefa", `Tarefa ${task.taskName} excluida com sucesso`)}>
                <Text style={styles.deleteText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
      ))}

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.buttonGoBack}
          onPress={() => navigation.goBack()}
          testID='buttonGoBack'
        >
          <Text style={styles.textButtonGoBack}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoList; 
