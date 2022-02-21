def mediansortedlist(list1, list2):
    for i in range(len(list2)):
        list1.append(list2[0])
        list2.pop(0)
    list1.sort()
    if len(list1) % 2 == 0:
        print(list1)
        return (list1[int(len(list1) / 2) - 1] +
                list1[0 - int(len(list1) / 2)]) / 2
    else:
        print(list1)
        return list1[int(int(len(list1) / 2) + .5)]