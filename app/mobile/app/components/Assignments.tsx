

import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import AssignCard from './Assignments/AssignCard'

export default function Assignments() {

  const arr = Array.from({length: 4});

  return (
    <FlatList style={styles.main}
    data={arr}
    keyExtractor={(_, index) => index.toString()}
    renderItem={() => (
      <AssignCard 
        id='tester'
        title='POO'
        details='Projeto final entrega completa'
        date={new Date(12, 6, 2026, 23, 59)}
        />
    )}
    />
        
  )
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    maxHeight: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
})
